import { config } from '../../../src/config';

export const API_REST_LAMBDA_NAME = `${config.env.toLowerCase()}-api-rest`;
export const API_GRAPHQL_LAMBDA_NAME = `${config.env.toLowerCase()}-api-graphql`;

export const apiFunctions = {
  graphql: {
    name: API_GRAPHQL_LAMBDA_NAME,
    handler: 'dist/src/features/graphql/lambda.handler',
    description: 'Serverless GraphQL api function (NestJS)',
    memorySize: 512,
    timeout: 30,
    vpc: {
      securityGroupIds: [{ Ref: 'ServerlessPublicSecurityGroup' }],
      subnetIds: [{ Ref: 'ServerlessPublicSubnetA' }],
    },
    events: [
      {
        http: {
          method: 'ANY',
          path: '/graphql',
          cors: true,
        },
      },
    ],
    layers: [{ Ref: 'LibsLambdaLayer' }],
    tags: {
      Name: API_GRAPHQL_LAMBDA_NAME,
      Env: config.env,
    },
  },
  rest: {
    name: API_REST_LAMBDA_NAME,
    handler: 'dist/src/features/rest/lambda.handler',
    description: 'Serverless Rest api function (NestJS)',
    memorySize: 512,
    timeout: 30,
    vpc: {
      securityGroupIds: [{ Ref: 'ServerlessPublicSecurityGroup' }],
      subnetIds: [{ Ref: 'ServerlessPublicSubnetA' }],
    },
    events: [
      {
        http: {
          method: 'ANY',
          path: '/',
          cors: true,
        },
      },
      {
        http: {
          method: 'ANY',
          path: '{proxy+}',
          cors: true,
        },
      },
    ],
    layers: [{ Ref: 'LibsLambdaLayer' }],
    tags: { Name: API_REST_LAMBDA_NAME, Env: config.env },
  },
};
