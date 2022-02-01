import { constants } from '@config';
import { RestAuthGuard } from '@features/_auth/guards';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class ConfigController {
  constructor(private configService: ConfigService) {}

  @Get('_config')
  @UseGuards(RestAuthGuard)
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