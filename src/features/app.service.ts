import { constants } from '@config';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvType } from '@types';
import { logger } from '@utils';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  public checkEnv(): boolean {
    if (
      !constants.app.envsAvailable.includes(
        this.configService.get<EnvType>('env'),
      )
    ) {
      logger.error(
        `❌ [${this.configService.get<string>(
          'env',
        )}] env is not found in the app available envs (${constants.app.envsAvailable.join(
          ',',
        )})`,
      );
      return false;
    }

    return true;
  }
}
