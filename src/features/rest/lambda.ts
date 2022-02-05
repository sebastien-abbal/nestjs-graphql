import { defaultConfig } from '@config';
import { RestModule } from '@features/rest/rest.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

async function bootstrap() {
  const config = defaultConfig();

  const app = await NestFactory.create(RestModule);

  // Logger
  if (config.isLoggerEnabled) app.useLogger(app.get(Logger));

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ? server : await bootstrap();
  return server(event, context, callback);
};
