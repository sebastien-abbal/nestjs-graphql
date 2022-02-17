import { ConfigController } from '@features/rest/default/config.controller';
import { HealthController } from '@features/rest/default/health.controller';
import { HomeController } from '@features/rest/default/home.controller';
import { HealthService } from '@features/rest/default/services/health.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [HomeController, ConfigController, HealthController],
  providers: [HealthService],
})
export class DefaultModule {}
