import type { AWS } from '@serverless/typescript';
import { config as dotEnvConfig } from 'dotenv';
import * as envVar from 'env-var';
import packageConfig from './package.json';

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
  provider: {
    name: 'aws',
    lambdaHashingVersion: '20201221',
    runtime: 'nodejs12.x',
    apiGateway: {
      shouldStartNameWithService: true,
    },
    environment: {
      NODE_ENV: envVar.get('NODE_ENV').required().asString(),
      APP_PORT: envVar.get('APP_PORT').required().asString(),
      APP_HOST: envVar.get('APP_HOST').required().asString(),
      PG_HOST: envVar.get('PG_HOST').required().asString(),
      PG_PORT: envVar.get('PG_PORT').required().asString(),
      PG_DATABASE: envVar.get('PG_DATABASE').required().asString(),
      PG_USER: envVar.get('PG_USER').required().asString(),
      PG_PASSWORD: envVar.get('PG_PASSWORD').required().asString(),
      JWT_SECRET: envVar.get('JWT_SECRET').required().asString(),
      JWT_ACCESS_TOKEN_EXPIRATION_TIME: envVar
        .get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')
        .required()
        .asString(),
      JWT_REFRESH_TOKEN_EXPIRATION_TIME: envVar
        .get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')
        .required()
        .asString(),
    },
  },
  functions: {
    graphql: {
      handler: 'dist/src/features/graphql/_lambda.handler',
      events: [
        {
          http: {
            method: 'ANY',
            path: '/graphql',
          },
        },
      ],
    },
    // rest: {
    //   handler: 'dist/src/features/rest/_lambda.handler',
    //   events: [
    //     {
    //       http: {
    //         method: 'ANY',
    //         path: '/',
    //       },
    //     },
    //     {
    //       http: {
    //         method: 'ANY',
    //         path: '{proxy+}',
    //       },
    //     },
    //   ],
    // },
  },
};

module.exports = serverlessConfiguration;