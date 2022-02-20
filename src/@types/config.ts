export type EnvType = 'prod' | 'preprod' | 'dev' | 'test';

export type IConfigFull = IConfigApp | IConfigEnv | IConfigJwt | IConfigGraphQL;

export interface IConfigEnv {
  env: EnvType;
}

export interface IConfigApp {
  host: string;
  port: number;
  rootPath: string;
  isLoggerEnabled: boolean;
}

export interface IConfigJwt {
  jwtPublicKey: string;
  jwtPrivateKey: string;
  jwtAccessTokenExpirationTimeInSeconds: number;
  jwtRefreshTokenExpirationTimeInSeconds: number;
  encryptionKey: string;
}

export interface IConfigGraphQL {
  schemaFilePath: string;
  isPlaygroundEnabled: boolean;
}
