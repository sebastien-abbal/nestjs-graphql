import { config } from '../../../src/config';
import { ASSETS_BUCKET_NAME } from './s3.resource';

export const cloudfront = {
  ServerlessAssetsDistribution: {
    DependsOn: [
      'ServerlessAssetsS3Bucket',
      'ServerlessAssetsDistributionCachePolicy',
      'ServerlessAssetsDistributionOriginAccessIdentity',
    ],
    Type: 'AWS::CloudFront::Distribution',
    Properties: {
      DistributionConfig: {
        Enabled: 'true',
        DefaultCacheBehavior: {
          AllowedMethods: ['GET', 'HEAD'],
          TargetOriginId: 'ServerlessAssetsS3BucketOrigin',
          ViewerProtocolPolicy: 'https-only',
          Compress: true,
          CachePolicyId: {
            'Fn::GetAtt': ['ServerlessAssetsDistributionCachePolicy', 'Id'],
          },
        },
        Origins: [
          {
            Id: 'ServerlessAssetsS3BucketOrigin',
            DomainName: `${ASSETS_BUCKET_NAME}.s3.amazonaws.com`,
            ConnectionAttempts: '3',
            ConnectionTimeout: '10',
            S3OriginConfig: {
              OriginAccessIdentity: {
                'Fn::Join': [
                  '',
                  [
                    'origin-access-identity/cloudfront/',
                    { Ref: 'ServerlessAssetsDistributionOriginAccessIdentity' },
                  ],
                ],
              },
            },
          },
        ],
      },
      Tags: [
        {
          Key: 'Name',
          Value: `${config.env.toLowerCase()}-assets-distribution`,
        },
        { Key: 'Env', Value: config.env },
      ],
    },
  },
  ServerlessAssetsDistributionCachePolicy: {
    Type: 'AWS::CloudFront::CachePolicy',
    Properties: {
      CachePolicyConfig: {
        Name: `${config.env.toLowerCase()}-assets-distribution-cache-policy`,
        DefaultTTL: '86400',
        MinTTL: '60',
        MaxTTL: '31536000',
        ParametersInCacheKeyAndForwardedToOrigin: {
          EnableAcceptEncodingBrotli: false,
          EnableAcceptEncodingGzip: false,
          CookiesConfig: { CookieBehavior: 'all' },
          HeadersConfig: { HeaderBehavior: 'none' },
          QueryStringsConfig: { QueryStringBehavior: 'all' },
        },
      },
    },
  },
  ServerlessAssetsDistributionOriginAccessIdentity: {
    Type: 'AWS::CloudFront::CloudFrontOriginAccessIdentity',
    Properties: {
      CloudFrontOriginAccessIdentityConfig: {
        Comment: `access-identity-${ASSETS_BUCKET_NAME}.s3.amazonaws.com`,
      },
    },
  },
};
