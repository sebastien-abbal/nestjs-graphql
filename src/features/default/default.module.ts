import { ConfigController } from '@features/default/config/config.controller';
import { HealthController } from '@features/default/health/health.controller';
import { HealthService } from '@features/default/health/health.service';
import { HomeController } from '@features/default/home/home.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [HomeController, ConfigController, HealthController],
  providers: [HealthService],
  exports: [],
})
export class DefaultModule {}
