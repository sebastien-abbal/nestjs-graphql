import { Controller, Get } from '@nestjs/common';
import { UserRole } from '../../../@graphql/generated';
import { config, constants } from '../../../config';
import { RestAuth } from '../auth/auth.decorators';

@Controller()
export class ConfigController {
  @Get('_config')
  @RestAuth(UserRole.MODERATOR, UserRole.ADMIN)
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
