import {
  EnvType,
  IConfigApp,
  IConfigFull,
  IConfigGraphQL,
  IConfigJwt,
} from '@types';
import { config as dotEnvConfig } from 'dotenv';
import * as envVar from 'env-var';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';
import { constants, DEV_ENV, PREPROD_ENV, PROD_ENV } from './constants';

export class Config {
  private static instance: Config;

  public env: EnvType;
  public app: IConfigApp;
  public graphql: IConfigGraphQL;
  public auth: IConfigJwt;
  public pgDatabase: ConnectionOptions;

  private constructor() {
    this.env = envVar.get('NODE_ENV').default(DEV_ENV).asString() as EnvType;

    this.app = {
      host: envVar.get('APP_HOST').default(constants.app.localhost).asString(),
      port: envVar.get('APP_PORT').default(constants.app.port).asInt(),
      isLoggerEnabled: [PROD_ENV, PREPROD_ENV].includes(this.env),
    };

    this.graphql = {
      schemaFilePath: join(process.cwd(), 'generated/schema.gql'),
      isPlaygroundEnabled: ![PROD_ENV, PREPROD_ENV].includes(this.env),
      isDebugEnabled: ![PROD_ENV, PREPROD_ENV].includes(this.env),
    };

    this.auth = {
      jwtSecret: envVar.get('JWT_SECRET').required().asString(),
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

    this.pgDatabase = {
      name: constants.databases.postgres.providerName,
      type: 'postgres',
      host: envVar.get('PG_HOST').required().asString(),
      port: envVar.get('PG_PORT').required().asInt(),
      username: envVar.get('PG_USER').required().asString(),
      password: envVar.get('PG_PASSWORD').required().asString(),
      database: envVar.get('PG_DATABASE').required().asString(),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      cache: [PROD_ENV, PREPROD_ENV].includes(this.env),
      synchronize: false,
      dropSchema: false,
      logging: false,
      migrations: [__dirname + '../../generated/migrations/*{.ts,.js}'],
      cli: {
        migrationsDir: join(process.cwd(), 'generated/migrations'),
      },
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
