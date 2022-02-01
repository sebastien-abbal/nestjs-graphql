import { HealthService } from '@features/rest/default/health/health.service';
import { databaseProviders } from '@features/_database/database.providers';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('/_health')
  getHealthCheck() {
    const details = {};
    for (const provider of databaseProviders) {
      details[provider.name] = this.healthService.getTypeOrmConnectionStatus({
        name: provider.name,
      });
    }

    return {
      status: !Object.values(details).some((bool) => bool !== 'ok')
        ? 'ok'
        : 'error',
      details,
    };
  }
}
