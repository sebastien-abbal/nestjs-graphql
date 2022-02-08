import { ConfigController } from '@features/rest/default/config/config.controller';
import { HealthController } from '@features/rest/default/health/health.controller';
import { HealthService } from '@features/rest/default/health/health.service';
import { HomeController } from '@features/rest/default/home/home.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [HomeController, ConfigController, HealthController],
  providers: [HealthService],
})
export class DefaultModule {}
