import { Injectable } from '@nestjs/common';
import { config, constants } from '../config';
import { logger } from '../utils';

@Injectable()
export class AppService {
  public checkEnv(): boolean {
    if (!constants.app.envsAvailable.includes(config.env)) {
      logger.error(
        `❌ [${
          config.env
        }] env is not found in the app available envs (${constants.app.envsAvailable.join(
          ',',
        )})`,
      );
      return false;
    }

    return true;
  }
}
