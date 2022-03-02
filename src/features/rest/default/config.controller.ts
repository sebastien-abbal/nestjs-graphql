import { config } from '@config';
import { RestAuth } from '@features/rest/auth/auth.decorators';
import { Controller, Get } from '@nestjs/common';
import { UserRole } from '@types';
import { bytesToSize, secondsToHms } from '@utils';
import os from 'os';

@Controller()
export class ConfigController {
  @Get('_config')
  @RestAuth(UserRole.MODERATOR, UserRole.ADMIN)
  getConfig() {
    return {
      name: config.app.name,
      company: config.app.company,
      port: config.app.port,
      env: config.env,
      hostname: os.hostname(),
      os: os.type(),
      memory: bytesToSize(os.totalmem()),
      uptime: secondsToHms(os.uptime()),
    };
  }
}
