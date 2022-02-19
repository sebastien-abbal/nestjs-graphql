import { Controller, Get } from '@nestjs/common';
import { HealthService } from './services/health.service';

@Controller()
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('/_health')
  async getHealthCheck() {
    const details = {};
    details['postgres'] =
      await this.healthService.getDatabaseConnectionStatus();

    return {
      status: !Object.values(details).some((bool) => bool !== 'ok')
        ? 'ok'
        : 'error',
      details,
    };
  }
}
