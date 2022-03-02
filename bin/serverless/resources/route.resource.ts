import { config } from '../../../src/config';

export const routes = {
  ServerlessPublicRouteTable: {
    DependsOn: ['ServerlessVPC'],
    Type: 'AWS::EC2::RouteTable',
    Properties: {
      VpcId: { Ref: 'ServerlessVPC' },
      Tags: [
        { Key: 'Name', Value: `${config.env.toLowerCase()}-route-table` },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessPublicRoute: {
    DependsOn: ['ServerlessPublicRouteTable', 'ServerlessInternetGateway'],
    Type: 'AWS::EC2::Route',
    Properties: {
      DestinationCidrBlock: '0.0.0.0/0',
      GatewayId: { Ref: 'ServerlessInternetGateway' },
      RouteTableId: { Ref: 'ServerlessPublicRouteTable' },
    },
  },
  ServerlessPublicRouteTableAssociationSubnetA: {
    DependsOn: ['ServerlessPublicRouteTable', 'ServerlessPublicSubnetA'],
    Type: 'AWS::EC2::SubnetRouteTableAssociation',
    Properties: {
      RouteTableId: { Ref: 'ServerlessPublicRouteTable' },
      SubnetId: { Ref: 'ServerlessPublicSubnetA' },
    },
  },
  ServerlessPrivateRouteTableAssociationSubnetA: {
    DependsOn: ['ServerlessPublicRouteTable', 'ServerlessPrivateSubnetA'],
    Type: 'AWS::EC2::SubnetRouteTableAssociation',
    Properties: {
      RouteTableId: { Ref: 'ServerlessPublicRouteTable' },
      SubnetId: { Ref: 'ServerlessPrivateSubnetA' },
    },
  },
  ServerlessPrivateRouteTableAssociationSubnetB: {
    DependsOn: ['ServerlessPublicRouteTable', 'ServerlessPrivateSubnetB'],
    Type: 'AWS::EC2::SubnetRouteTableAssociation',
    Properties: {
      RouteTableId: { Ref: 'ServerlessPublicRouteTable' },
      SubnetId: { Ref: 'ServerlessPrivateSubnetB' },
    },
  },
  ServerlessPrivateRouteTableAssociationSubnetC: {
    DependsOn: ['ServerlessPublicRouteTable', 'ServerlessPrivateSubnetC'],
    Type: 'AWS::EC2::SubnetRouteTableAssociation',
    Properties: {
      RouteTableId: { Ref: 'ServerlessPublicRouteTable' },
      SubnetId: { Ref: 'ServerlessPrivateSubnetC' },
    },
  },
};
