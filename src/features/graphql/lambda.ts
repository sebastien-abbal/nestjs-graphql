import { PrismaService } from '@features/database/services';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { AllExceptionsFilter } from '@features/_filters/all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { logger } from '@utils';
import serverlessExpress from '@vendia/serverless-express';
import { APIGatewayProxyEvent, Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(GraphQLModule, {
    logger: false,
  });

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Prisma
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  // Error handler filter
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();

  logger.info({ action: 'LAMBDA_COLD_START' });

  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyEvent>,
) => {
  server = server ? server : await bootstrap();
  logger.info({
    action: 'LAMBDA_HANDLER',
    method: event.httpMethod,
    headers: event.headers
      ? {
          host: event.headers['host'] || event.headers['Host'],
          userAgent: event.headers['user-agent'] || event.headers['User-Agent'],
          authorization:
            event.headers['authorization'] || event.headers['Authorization'],
          contentLength:
            event.headers['content-length'] || event.headers['Content-Length'],
          contentType:
            event.headers['content-type'] || event.headers['Content-Type'],
        }
      : null,
  });
  return server(event, context, callback);
};
