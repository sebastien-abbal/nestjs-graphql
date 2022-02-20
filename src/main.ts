import { config } from '@config';
import { AppModule } from '@features/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Logger
  if (config.app.isLoggerEnabled) app.useLogger(app.get(Logger));

  await app.listen(3000);
}
bootstrap();
