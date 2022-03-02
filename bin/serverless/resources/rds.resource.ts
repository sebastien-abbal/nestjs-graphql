import * as envVar from 'env-var';
import { config } from '../../../src/config';
import { databaseUrlToParams } from '../../../src/utils';

export const DATABASE_USER = 'maria';
export const DATABASE_NAME = 'postgres';
export const DATABASE_URL = envVar
  .get('DATABASE_URL_' + config.env.toUpperCase())
  .required()
  .asString();
export const databaseInfos = databaseUrlToParams(DATABASE_URL);

export const rds = {
  ServerlessPostgresRDSInstance: {
    DependsOn: [
      'ServerlessVPCGatewayAttachment',
      'ServerlessRdsPrivateSubnetGroup',
      'ServerlessPrivateSecurityGroup',
    ],
    Type: 'AWS::RDS::DBInstance',
    Properties: {
      DBInstanceIdentifier: `${config.env.toLowerCase()}-db-${DATABASE_NAME}`,
      DBName: DATABASE_NAME,
      DBInstanceClass: 'db.t3.micro',
      StorageType: 'gp2',
      AllocatedStorage: '30',
      MasterUsername: DATABASE_USER,
      MasterUserPassword: databaseInfos.password,
      BackupRetentionPeriod: 7,
      Engine: 'postgres',
      EngineVersion: '14.1',
      MultiAZ: ['prod', 'preprod'].includes(config.env),
      PubliclyAccessible: true,
      CopyTagsToSnapshot: true,
      DeletionProtection: true,
      VPCSecurityGroups: [
        { 'Fn::GetAtt': ['ServerlessPrivateSecurityGroup', 'GroupId'] },
      ],
      DBSubnetGroupName: { Ref: 'ServerlessRdsPrivateSubnetGroup' },
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-rds-private-subnet-group`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
};
