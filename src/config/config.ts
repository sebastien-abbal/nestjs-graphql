import { config as dotEnvConfig } from 'dotenv';
import * as envVar from 'env-var';
import { join } from 'path';
import {
  EnvType,
  IConfigApp,
  IConfigFull,
  IConfigGraphQL,
  IConfigJwt,
} from '../@types';
import { constants, DEV_ENV, PREPROD_ENV, PROD_ENV } from './constants';
export class Config {
  private static instance: Config;

  public env: EnvType;
  public app: IConfigApp;
  public graphql: IConfigGraphQL;
  public auth: IConfigJwt;

  private constructor() {
    this.env = envVar.get('NODE_ENV').default(DEV_ENV).asString() as EnvType;

    this.app = {
      host: envVar.get('APP_HOST').default(constants.app.localhost).asString(),
      port: envVar.get('APP_PORT').default(constants.app.port).asInt(),
      rootPath: process.cwd(),
      isLoggerEnabled: [PROD_ENV, PREPROD_ENV].includes(this.env),
    };

    this.graphql = {
      schemaFilePath: join(this.app.rootPath, 'generated/schema.gql'),
      isPlaygroundEnabled: ![PROD_ENV, PREPROD_ENV].includes(this.env),
    };

    this.auth = {
      jwtPublicKey: envVar.get('JWT_PUBLIC_KEY').required().asString(),
      jwtPrivateKey: envVar.get('JWT_PRIVATE_KEY').required().asString(),
      jwtAccessTokenExpirationTimeInSeconds: envVar
        .get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')
        .default(60 * 60 * 24)
        .asInt(),
      jwtRefreshTokenExpirationTimeInSeconds: envVar
        .get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')
        .default(60 * 60 * 24 * 30)
        .asInt(),
      encryptionKey: envVar.get('ENCRYPTION_KEY').required().asString(),
    };
  }

  public getConfig = (): IConfigFull => {
    return {
      env: this.env,
      ...this.app,
      ...this.auth,
      ...this.graphql,
    };
  };

  static getInstance(): Config {
    if (!Config.instance) {
      dotEnvConfig();
      Config.instance = new Config();
    }

    return Config.instance;
  }
}

export const config = Config.getInstance();
