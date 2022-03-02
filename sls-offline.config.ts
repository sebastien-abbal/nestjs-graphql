import type { AWS } from '@serverless/typescript';
import { config as dotEnvConfig } from 'dotenv';
import * as envVar from 'env-var';
import { apiFunctions } from './bin/serverless/resources';
import packageConfig from './package.json';
import { config } from './src/config';
dotEnvConfig();

const DATABASE_URL = envVar.get('DATABASE_URL').required().asString();

const serverlessConfiguration: AWS = {
  service: packageConfig.name,
  useDotenv: true,
  frameworkVersion: '*',
  plugins: {
    modules: ['serverless-offline', 'serverless-plugin-warmup'],
  },
  custom: {
    'serverless-offline': {
      noPrependStageInUrl: true,
    },
  },
  provider: {
    name: 'aws',
    stage: config.env,
    runtime: 'nodejs14.x',
    region: config.app.region,
    environment: {
      NODE_ENV: config.env,
      AWS_KEY_REGION: config.app.region,
      DATABASE_URL,
      JWT_PUBLIC_KEY: config.auth.jwtPublicKey,
      JWT_PRIVATE_KEY: config.auth.jwtPrivateKey,
    },
  },
  package: {
    individually: true,
    patterns: [
      '!node_modules/**',
      '!layer/**',
      '!.github/**',
      '!.serverless/**',
      '!coverage/**',
      '!src/**',
    ],
  },
  functions: {
    ...apiFunctions,
  },
};

module.exports = serverlessConfiguration;
