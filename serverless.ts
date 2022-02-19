import type { AWS } from '@serverless/typescript';
import { config as dotEnvConfig } from 'dotenv';
import * as envVar from 'env-var';
import packageConfig from './package.json';
import { AwsRegion } from './src/@types';

dotEnvConfig();

const serverlessConfiguration: AWS = {
  service: packageConfig.name,
  useDotenv: true,
  frameworkVersion: '*',
  plugins: {
    modules: [
      'serverless-plugin-optimize',
      'serverless-offline',
      'serverless-plugin-warmup',
    ],
  },
  custom: {
    warmup: {
      default: {
        enabled: true,
      },
    },
    'serverless-offline': {
      noPrependStageInUrl: true,
    },
  },
  package: {
    individually: true,
  },
  provider: {
    name: 'aws',
    stage: envVar.get('NODE_ENV').required().asString(),
    runtime: 'nodejs14.x',
    region: envVar.get('AWS_REGION').required().asString() as AwsRegion,
    lambdaHashingVersion: '20201221',
    apiGateway: {
      shouldStartNameWithService: true,
    },
    environment: {
      NODE_ENV: envVar.get('NODE_ENV').required().asString(),
      APP_PORT: envVar.get('APP_PORT').required().asString(),
      APP_HOST: envVar.get('APP_HOST').required().asString(),
      AWS_REGION: envVar.get('AWS_REGION').required().asString(),
      DATABASE_URL: envVar.get('DATABASE_URL').required().asString(),
      JWT_PUBLIC_KEY: envVar.get('JWT_PUBLIC_KEY').required().asString(),
      JWT_PRIVATE_KEY: envVar.get('JWT_PRIVATE_KEY').required().asString(),
      JWT_ACCESS_TOKEN_EXPIRATION_TIME: envVar
        .get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')
        .required()
        .asString(),
      JWT_REFRESH_TOKEN_EXPIRATION_TIME: envVar
        .get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')
        .required()
        .asString(),
      ENCRYPTION_KEY: envVar.get('ENCRYPTION_KEY').required().asString(),
    },
  },
  functions: {
    graphql: {
      handler: 'dist/src/features/graphql/lambda.handler',
      timeout: 60,
      memorySize: 512,
      events: [
        {
          http: {
            method: 'ANY',
            path: '/graphql',
          },
        },
      ],
    },
    rest: {
      handler: 'dist/src/features/rest/lambda.handler',
      timeout: 60,
      memorySize: 512,
      events: [
        {
          http: {
            method: 'ANY',
            path: '/',
          },
        },
        {
          http: {
            method: 'ANY',
            path: '{proxy+}',
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
