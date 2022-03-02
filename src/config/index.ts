import { config as dotEnvConfig } from 'dotenv';
import * as envVar from 'env-var';
import { isCloudFunction } from 'is-cloud-function';
import { join } from 'path';
import packageConfig from '../../package.json';
import {
  AwsRegion,
  EnvType,
  IConfigApp,
  IConfigFull,
  IConfigGraphQL,
  IConfigJwt,
  IConfigServerless,
} from '../@types';

export class Config {
  private static instance: Config;

  public env: EnvType;
  public app: IConfigApp;
  public serverless: IConfigServerless;
  public graphql: IConfigGraphQL;
  public auth: IConfigJwt;

  private constructor() {
    this.env = EnvType[envVar.get('NODE_ENV').required().asString()];

    this.app = {
      name: packageConfig.name,
      company: packageConfig.company,
      port: envVar.get('APP_PORT').default(3000).asInt(),
      region: envVar.get('AWS_KEY_REGION').required().asString() as AwsRegion,
      domainUrl: envVar.get('DOMAIN_URL').required().asString(),
      cdnUrl: envVar.get('ASSETS_CDN_URL').required().asString(),
      rootPath: process.cwd(),
      isLoggerEnabled: this.env !== 'test',
    };

    this.serverless = {
      alarmEmails: [],
      alarmPhones: [],
      bastionAuthorizedIps: [],
    };

    this.graphql = {
      schemaFilePath: join(this.app.rootPath, 'generated/schema.gql'),
      isPlaygroundEnabled: !isCloudFunction(),
      complexity: {
        max: 50,
        defaultValue: 1,
      },
      query: {
        defaultTakeResults: 20,
        defaultSkip: 0,
        maxResults: 100,
        minResults: 1,
      },
    };

    this.auth = {
      jwtPublicKey: envVar.get('JWT_PUBLIC_KEY').required().asString(),
      jwtPrivateKey: envVar.get('JWT_PRIVATE_KEY').required().asString(),
      jwtAccessTokenExpirationTimeInSeconds: envVar
        .get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')
        .default(86400)
        .asInt(),
      jwtRefreshTokenExpirationTimeInSeconds: envVar
        .get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')
        .default(2592000)
        .asInt(),
    };
  }

  public getConfig = (): IConfigFull => {
    return {
      env: this.env,
      app: { ...this.app },
      serverless: { ...this.serverless },
      auth: { ...this.auth },
      graphql: { ...this.graphql },
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
