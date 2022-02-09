import { constants } from '@config';
import { UserRole } from '@features/graphql/user/types';
import { RestAuth } from '@features/rest/auth/auth.decorators';
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class ConfigController {
  constructor(private configService: ConfigService) {}

  @Get('_config')
  @RestAuth(UserRole.ADMIN)
  getConfig() {
    return {
      name: constants.app.name,
      company: constants.app.company,
      host: this.configService.get<string>('host'),
      port: this.configService.get<number>('port'),
      env: this.configService.get<string>('env'),
    };
  }
}
