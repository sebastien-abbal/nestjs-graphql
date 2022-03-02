import { config } from '../../../src/config';

export const security = {
  ServerlessPublicSecurityGroup: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::SecurityGroup',
    Properties: {
      GroupName: `${config.env.toLowerCase()}-public-security-group`,
      GroupDescription: 'Security group for public access',
      SecurityGroupEgress: [
        {
          IpProtocol: 'tcp',
          FromPort: '0',
          ToPort: '65535',
          CidrIp: '0.0.0.0/0',
        },
      ],
      VpcId: { Ref: 'ServerlessVPC' },
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-public-security-group`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessBastionSecurityGroup: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::SecurityGroup',
    Properties: {
      GroupName: `${config.env.toLowerCase()}-bastion-security-group`,
      GroupDescription: 'Security group for bastion access',
      SecurityGroupIngress: config.serverless.bastionAuthorizedIps.map((ip) => {
        const CidrIp = ip.startsWith('0.0.0.0') ? '0.0.0.0/0' : `${ip}/32`;
        return {
          IpProtocol: 'tcp',
          FromPort: '22',
          ToPort: '22',
          CidrIp,
        };
      }),
      VpcId: { Ref: 'ServerlessVPC' },
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-bastion-security-group`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessPrivateSecurityGroup: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::SecurityGroup',
    Properties: {
      GroupName: `${config.env.toLowerCase()}-private-security-group`,
      GroupDescription: 'Security group for private access',
      VpcId: { Ref: 'ServerlessVPC' },
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-private-security-group`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessRdsSecurityGroupIngressForPublicSecurityGroup: {
    DependsOn: [
      'ServerlessPublicSecurityGroup',
      'ServerlessPrivateSecurityGroup',
    ],
    Type: 'AWS::EC2::SecurityGroupIngress',
    Properties: {
      IpProtocol: 'tcp',
      FromPort: '5432',
      ToPort: '5432',
      GroupId: {
        'Fn::GetAtt': ['ServerlessPrivateSecurityGroup', 'GroupId'],
      },
      SourceSecurityGroupId: {
        'Fn::GetAtt': ['ServerlessPublicSecurityGroup', 'GroupId'],
      },
    },
  },
  ServerlessRdsSecurityGroupIngressForBastionSecurityGroup: {
    DependsOn: [
      'ServerlessBastionSecurityGroup',
      'ServerlessPrivateSecurityGroup',
    ],
    Type: 'AWS::EC2::SecurityGroupIngress',
    Properties: {
      IpProtocol: 'tcp',
      FromPort: '5432',
      ToPort: '5432',
      GroupId: {
        'Fn::GetAtt': ['ServerlessPrivateSecurityGroup', 'GroupId'],
      },
      SourceSecurityGroupId: {
        'Fn::GetAtt': ['ServerlessBastionSecurityGroup', 'GroupId'],
      },
    },
  },
};
