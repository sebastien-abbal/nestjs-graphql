import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getConnection } from 'typeorm';

@Injectable()
export class HealthService {
  constructor(private configService: ConfigService) {}

  getTypeOrmConnectionStatus = ({ name }: { name: string }): string => {
    try {
      if (!!getConnection(name)) {
        return 'ok';
      } else {
        return 'error';
      }
    } catch (err) {
      return this.configService.get('env') === 'dev' ? err.message : 'error';
    }
  };
}
