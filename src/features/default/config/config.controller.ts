import { constants } from '@config';
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class ConfigController {
  constructor(private configService: ConfigService) {}

  @Get('_config')
  getConfig() {
    return {
      name: constants.app.name,
      company: constants.app.company,
      host: this.configService.get('host') as string,
      port: this.configService.get('port') as number,
      env: this.configService.get('env') as string,
    };
  }
}
