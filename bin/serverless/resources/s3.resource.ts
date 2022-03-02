import { config } from '../../../src/config';

export const ASSETS_BUCKET_NAME = `${config.env.toLowerCase()}-bucket-assets`;
export const s3 = {
  ServerlessAssetsS3Bucket: {
    Type: 'AWS::S3::Bucket',
    Properties: {
      BucketName: ASSETS_BUCKET_NAME,
      AccessControl: 'PublicRead',
      CorsConfiguration: {
        CorsRules: [
          {
            AllowedMethods: ['GET', 'HEAD'],
            AllowedOrigins: ['*'],
          },
        ],
      },
      Tags: [
        { Key: 'Name', Value: ASSETS_BUCKET_NAME },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessAssetsS3BucketPolicy: {
    DependsOn: [
      'ServerlessAssetsS3Bucket',
      'ServerlessAssetsDistributionOriginAccessIdentity',
    ],
    Type: 'AWS::S3::BucketPolicy',
    Properties: {
      Bucket: { Ref: 'ServerlessAssetsS3Bucket' },
      PolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Sid: 'AllowCloudFrontOnly',
            Effect: 'Allow',
            Principal: {
              CanonicalUser: {
                'Fn::GetAtt': [
                  'ServerlessAssetsDistributionOriginAccessIdentity',
                  'S3CanonicalUserId',
                ],
              },
            },
            Action: ['s3:GetObject', 's3:GetObjectVersion'],
            Resource: [`arn:aws:s3:::${ASSETS_BUCKET_NAME}/*`],
          },
        ],
      },
    },
  },
};
