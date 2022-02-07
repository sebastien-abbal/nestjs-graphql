import { DEV_ENV } from '@config';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getConnection } from 'typeorm';

@Injectable()
export class HealthService {
  constructor(private configService: ConfigService) {}

  getTypeOrmConnectionStatus = ({ name }: { name: string }): string => {
    try {
      if (Boolean(getConnection(name))) {
        return 'ok';
      } else {
        return 'error';
      }
    } catch (err) {
      return this.configService.get<string>('env') === DEV_ENV
        ? err.message
        : 'error';
    }
  };
}
