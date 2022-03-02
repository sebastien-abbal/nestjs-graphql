import { config } from '../../../src/config';

export const ec2 = {
  ServerlessBastionInstance: {
    DependsOn: ['ServerlessBastionSecurityGroup', 'ServerlessPublicSubnetA'],
    Type: 'AWS::EC2::Instance',
    Properties: {
      ImageId: 'ami-08cfb7b19d5cd546d',
      InstanceType: 't2.micro',
      KeyName: `${config.env.toLowerCase()}`,
      SecurityGroupIds: [
        {
          'Fn::GetAtt': ['ServerlessBastionSecurityGroup', 'GroupId'],
        },
      ],
      SubnetId: { Ref: 'ServerlessPublicSubnetA' },
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-bastion-instance`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
};
