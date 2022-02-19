import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { config } from './config';
import { AppModule } from './features/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: config.app.isLoggerEnabled
      ? []
      : ['warn', 'debug', 'error', 'verbose'],
    bufferLogs: config.app.isLoggerEnabled,
  });

  // Logger
  // if (config.app.isLoggerEnabled) app.useLogger(app.get(Logger));

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
