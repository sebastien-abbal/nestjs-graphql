import { defaultConfig } from '@config';
import { AppModule } from '@features/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const config = defaultConfig();

  const app = await NestFactory.create(AppModule, {
    logger: config.isLoggerEnabled ? [] : ['warn', 'debug', 'error', 'verbose'],
    bufferLogs: config.isLoggerEnabled,
  });

  // Logger
  if (config.isLoggerEnabled) app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
