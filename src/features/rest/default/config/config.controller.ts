import { config, constants } from '@config';
import { RestAuth } from '@features/rest/auth/auth.decorators';
import { UserRole } from '@graphql';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ConfigController {
  @Get('_config')
  @RestAuth(UserRole.ADMIN)
  getConfig() {
    return {
      name: constants.app.name,
      company: constants.app.company,
      host: config.app.host,
      port: config.app.port,
      env: config.env,
    };
  }
}
