import { config } from '../../../src/config';
import { VPC_CIDR } from './vpc.resource';

export const network = {
  ServerlessInternetGateway: {
    Type: 'AWS::EC2::InternetGateway',
    Properties: {
      Tags: [
        { Key: 'Name', Value: `${config.env.toLowerCase()}-internet-gateway` },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessPrivateSubnetA: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::Subnet',
    Properties: {
      VpcId: { Ref: 'ServerlessVPC' },
      AvailabilityZone: `${config.app.region}a`,
      CidrBlock: `${VPC_CIDR}.0.0.0/24`,
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-private-subnet-${
            config.app.region
          }a`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessPrivateSubnetB: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::Subnet',
    Properties: {
      VpcId: { Ref: 'ServerlessVPC' },
      AvailabilityZone: `${config.app.region}b`,
      CidrBlock: `${VPC_CIDR}.0.16.0/24`,
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-private-subnet-${
            config.app.region
          }b`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessPrivateSubnetC: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::Subnet',
    Properties: {
      VpcId: { Ref: 'ServerlessVPC' },
      AvailabilityZone: `${config.app.region}c`,
      CidrBlock: `${VPC_CIDR}.0.32.0/24`,
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-private-subnet-${
            config.app.region
          }c`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessPublicSubnetA: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::Subnet',
    Properties: {
      VpcId: { Ref: 'ServerlessVPC' },
      AvailabilityZone: `${config.app.region}a`,
      CidrBlock: `${VPC_CIDR}.0.48.0/24`,
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-public-subnet-${
            config.app.region
          }a`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessRdsPrivateSubnetGroup: {
    DependsOn: [
      'ServerlessPrivateSubnetA',
      'ServerlessPrivateSubnetB',
      'ServerlessPrivateSubnetC',
    ],
    Type: 'AWS::RDS::DBSubnetGroup',
    Properties: {
      DBSubnetGroupName: `${config.env.toLowerCase()}-rds-private-subnet`,
      DBSubnetGroupDescription: 'RDS private subnet group',
      SubnetIds: [
        { Ref: 'ServerlessPrivateSubnetA' },
        { Ref: 'ServerlessPrivateSubnetB' },
        { Ref: 'ServerlessPrivateSubnetC' },
      ],
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-rds-private-subnet`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
};
