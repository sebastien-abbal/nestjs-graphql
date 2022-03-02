import type { AWS } from '@serverless/typescript';
import { config as dotEnvConfig } from 'dotenv';
import {
  alarms,
  apiFunctions,
  cloudfront,
  databaseInfos,
  DATABASE_NAME,
  DATABASE_USER,
  ec2,
  eip,
  network,
  rds,
  routes,
  s3,
  security,
  sns,
  vpc,
} from './bin/serverless/resources';
import packageConfig from './package.json';
import { config } from './src/config';

dotEnvConfig();

const serverlessConfiguration: AWS = {
  service: packageConfig.name.toLowerCase(),
  provider: {
    name: 'aws',
    stage: config.env,
    runtime: 'nodejs14.x',
    region: config.app.region,
    logRetentionInDays: 14,
    deploymentBucket: {
      name: `${config.env.toLowerCase()}-bucket-api`,
      serverSideEncryption: 'AES256',
    },
    environment: {
      NODE_ENV: config.env,
      AWS_KEY_REGION: config.app.region,
      DOMAIN_URL: config.app.domainUrl,
      ASSETS_CDN_URL: {
        'Fn::Join': [
          '',
          [
            'https://',
            { 'Fn::GetAtt': ['ServerlessAssetsDistribution', 'DomainName'] },
          ],
        ],
      },
      DATABASE_URL: {
        'Fn::Join': [
          '',
          [
            `postgresql://${DATABASE_USER}:${databaseInfos.password}@`,
            {
              'Fn::GetAtt': [
                'ServerlessPostgresRDSInstance',
                'Endpoint.Address',
              ],
            },
            ':',
            {
              'Fn::GetAtt': ['ServerlessPostgresRDSInstance', 'Endpoint.Port'],
            },
            `/${DATABASE_NAME}?schema=public`,
          ],
        ],
      },
      JWT_PUBLIC_KEY: config.auth.jwtPublicKey,
      JWT_PRIVATE_KEY: config.auth.jwtPrivateKey,
    },
  },
  custom: {
    deploymentBucket: {
      versionning: true,
      accelerate: true,
      blockPublicAccess: true,
      tags: [
        { Key: 'Name', Value: `${config.env.toLowerCase()}-bucket-api` },
        { Key: 'Env', Value: config.env },
      ],
    },
    customDomain: {
      domainName: `${config.env.toLowerCase()}.${config.app.domainUrl}`,
      stage: config.env,
      basePath: '',
      certificateName: `*.${config.app.domainUrl}`,
      createRoute53Record: true,
      createRoute53IPv6Record: true,
      endpointType: 'regional',
      securityPolicy: 'tls_1_2',
      apiType: 'rest',
      autoDomain: true,
    },
    warmup: {
      inOfficeHoursWarmer: {
        name: `${config.env.toLowerCase()}-api-warmup-in-office-hours`,
        enabled: true,
        events: [{ schedule: 'cron(0/5 7-23 ? * * *)' }],
        concurrency: 3,
        prewarm: true,
        payload: {
          body: null,
          httpMethod: 'GET',
          path: '/graphql',
          requestContext: {},
        },
        tags: {
          Name: `${config.env.toLowerCase()}-api-graphql`,
          Env: config.env,
        },
      },
      outOfficeHoursWarmer: {
        name: `${config.env.toLowerCase()}-api-warmup-out-office-hours`,
        enabled: true,
        events: [{ schedule: 'cron(0/5 0-6 ? * * *)' }],
        concurrency: 1,
        payload: {
          body: null,
          httpMethod: 'GET',
          path: '/graphql',
          requestContext: {},
        },
        tags: {
          Name: `${config.env.toLowerCase()}-api-graphql`,
          Env: config.env,
        },
      },
    },
  },
  layers: {
    libs: {
      name: `${config.env.toLowerCase()}-libs-layer`,
      description: 'Layer with prod node_modules for api.',
      path: 'layer',
      compatibleRuntimes: ['nodejs14.x'],
      package: {
        patterns: [
          '!nodejs/node_modules/@prisma/engines',
          '!nodejs/node_modules/prisma',
          '!nodejs/node_modules/.prisma/**/libquery_engine-*',
          'nodejs/node_modules/.prisma/**/libquery_engine-rhel-openssl-1.0.x.so.node',
        ],
      },
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
  plugins: {
    modules: [
      'serverless-deployment-bucket',
      'serverless-domain-manager',
      'serverless-plugin-warmup',
    ],
  },
  resources: {
    Resources: {
      ...vpc,
      ...network,
      ...security,
      ...routes,
      ...rds,
      ...s3,
      ...cloudfront,
      ...ec2,
      ...eip,
      ...sns,
      ...alarms,
    },
  },
  functions: {
    ...apiFunctions,
  },
};

module.exports = serverlessConfiguration;
