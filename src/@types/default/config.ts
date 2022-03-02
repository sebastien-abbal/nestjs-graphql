import { AwsRegion } from './aws';

export enum EnvType {
  prod = 'prod',
  preprod = 'preprod',
  dev = 'dev',
  test = 'test',
}

export type IConfigFull = {
  env: EnvType;
  app: IConfigApp;
  auth: IConfigJwt;
  serverless: IConfigServerless;
  graphql: IConfigGraphQL;
};

export interface IConfigApp {
  name: string;
  company: string;
  port: number;
  rootPath: string;
  isLoggerEnabled: boolean;
  region: AwsRegion;
  cdnUrl: string;
  domainUrl: string;
}

export interface IConfigServerless {
  alarmEmails: string[];
  alarmPhones: string[];
  bastionAuthorizedIps: string[];
}

export interface IConfigJwt {
  jwtPublicKey: string;
  jwtPrivateKey: string;
  jwtAccessTokenExpirationTimeInSeconds: number;
  jwtRefreshTokenExpirationTimeInSeconds: number;
}

export interface IConfigGraphQL {
  schemaFilePath: string;
  isPlaygroundEnabled: boolean;
  complexity: {
    max: number;
    defaultValue: number;
  };
  query: {
    defaultTakeResults: number;
    defaultSkip: number;
    maxResults: number;
    minResults: number;
  };
}
