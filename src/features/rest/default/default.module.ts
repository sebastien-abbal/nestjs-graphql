import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { HealthController } from './health.controller';
import { HomeController } from './home.controller';
import { HealthService } from './services/health.service';

@Module({
  controllers: [HomeController, ConfigController, HealthController],
  providers: [HealthService],
})
export class DefaultModule {}
