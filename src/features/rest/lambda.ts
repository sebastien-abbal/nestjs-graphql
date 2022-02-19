import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { APIGatewayProxyEvent, Callback, Context, Handler } from 'aws-lambda';
import { config } from '../../config';
import { RestModule } from './rest.module';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(RestModule);

  // Logger
  if (config.app.isLoggerEnabled) app.useLogger(app.get(Logger));

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyEvent>,
) => {
  server = server ? server : await bootstrap();
  return server(event, context, callback);
};
