import { config } from '../../../src/config';

export const VPC_CIDR = '10';

export const vpc = {
  ServerlessVPC: {
    Type: 'AWS::EC2::VPC',
    Properties: {
      CidrBlock: `${VPC_CIDR}.0.0.0/16`,
      EnableDnsSupport: true,
      EnableDnsHostnames: true,
      InstanceTenancy: 'default',
      Tags: [
        { Key: 'Name', Value: `${config.env.toLowerCase()}-vpc-default` },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessVPCGatewayAttachment: {
    DependsOn: ['ServerlessVPC', 'ServerlessInternetGateway'],
    Type: 'AWS::EC2::VPCGatewayAttachment',
    Properties: {
      InternetGatewayId: { Ref: 'ServerlessInternetGateway' },
      VpcId: { Ref: 'ServerlessVPC' },
    },
  },
};
