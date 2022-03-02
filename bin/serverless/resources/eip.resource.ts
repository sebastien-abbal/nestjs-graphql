import { config } from '../../../src/config';

export const eip = {
  ServerlessBastionAddressEIP: {
    Type: 'AWS::EC2::EIP',
    Properties: {
      Domain: 'vpc',
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-bastion-eip`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessBastionAddressEIPAssociation: {
    DependsOn: ['ServerlessBastionAddressEIP', 'ServerlessBastionInstance'],
    Type: 'AWS::EC2::EIPAssociation',
    Properties: {
      AllocationId: {
        'Fn::GetAtt': ['ServerlessBastionAddressEIP', 'AllocationId'],
      },
      InstanceId: { Ref: 'ServerlessBastionInstance' },
    },
  },
};
