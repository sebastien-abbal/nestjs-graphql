import { config } from '@config';
import { AppModule } from '@features/app.module';
import { PrismaService } from '@features/database/services';
import { AllExceptionsFilter } from '@features/_filters/all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { logger } from '@utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Prisma
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  // Error handler filter
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));

  await app.listen(config.app.port);

  logger.info({ action: 'API_INIT' });
}
bootstrap();
