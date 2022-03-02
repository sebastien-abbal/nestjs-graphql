import { config } from '../../../src/config';

export const SNS_SUBSCRIPTIONS = [
  ...config.serverless.alarmPhones.map(
    (phoneNumber) => ({
      Endpoint: phoneNumber,
      Protocol: 'sms',
    }),
    ...config.serverless.alarmEmails.map((email) => ({
      Endpoint: email,
      Protocol: 'email',
    })),
  ),
];

export const sns = SNS_SUBSCRIPTIONS.length
  ? {
      ServerlessAlarmsSns: {
        Type: 'AWS::SNS::Topic',
        Properties: {
          TopicName: `${config.env.toLowerCase()}-sns-alarms`,
          DisplayName: `${config.env.toLowerCase()}-sns-alarms`,
          Subscription: SNS_SUBSCRIPTIONS,
          Tags: [
            {
              Key: 'Name',
              Value: `${config.env.toLowerCase()}-sns-alarms`,
            },
            { Key: 'Env', Value: config.env },
          ],
        },
      },
    }
  : {};
