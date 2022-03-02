import packageConfig from '../../../package.json';
import { config } from '../../../src/config';
import {
  API_GRAPHQL_LAMBDA_NAME,
  API_REST_LAMBDA_NAME,
} from './function.resource';
import { SNS_SUBSCRIPTIONS } from './sns.resource';

export const alarms = SNS_SUBSCRIPTIONS.length
  ? {
      ServerlessRdsConnectionsAlarm: {
        DependsOn: ['ServerlessPostgresRDSInstance', 'ServerlessAlarmsSns'],
        Type: 'AWS::CloudWatch::Alarm',
        Properties: {
          AlarmName: `${config.env.toLowerCase()}-rds-connections-alarm`,
          AlarmActions: [{ Ref: 'ServerlessAlarmsSns' }],
          MetricName: 'DatabaseConnections',
          Namespace: 'AWS/RDS',
          Statistic: 'Maximum',
          Dimensions: [
            {
              Name: 'DBInstanceIdentifier',
              Value: { Ref: 'ServerlessPostgresRDSInstance' },
            },
          ],
          Period: '120',
          EvaluationPeriods: '1',
          DatapointsToAlarm: '1',
          Threshold: '50',
          ComparisonOperator: 'GreaterThanThreshold',
          TreatMissingData: 'missing',
        },
      },
      ServerlessRdsCpuAlarm: {
        DependsOn: ['ServerlessPostgresRDSInstance', 'ServerlessAlarmsSns'],
        Type: 'AWS::CloudWatch::Alarm',
        Properties: {
          AlarmName: `${config.env.toLowerCase()}-rds-cpu-alarm`,
          AlarmActions: [{ Ref: 'ServerlessAlarmsSns' }],
          MetricName: 'CPUUtilization',
          Namespace: 'AWS/RDS',
          Statistic: 'Maximum',
          Dimensions: [
            {
              Name: 'DBInstanceIdentifier',
              Value: { Ref: 'ServerlessPostgresRDSInstance' },
            },
          ],
          Period: '120',
          EvaluationPeriods: '1',
          DatapointsToAlarm: '1',
          Threshold: '80',
          ComparisonOperator: 'GreaterThanThreshold',
          TreatMissingData: 'missing',
        },
      },
      ServerlessRestLambdaAlarm: {
        DependsOn: ['ServerlessAlarmsSns'],
        Type: 'AWS::CloudWatch::Alarm',
        Properties: {
          AlarmName: `${API_REST_LAMBDA_NAME}-lambda-alarm`,
          AlarmActions: [{ Ref: 'ServerlessAlarmsSns' }],
          MetricName: 'ConcurrentExecutions',
          Namespace: 'AWS/Lambda',
          Statistic: 'Maximum',
          Dimensions: [
            {
              Name: 'FunctionName',
              Value: API_REST_LAMBDA_NAME,
            },
            {
              Name: 'Resource',
              Value: API_REST_LAMBDA_NAME,
            },
          ],
          Period: '300',
          EvaluationPeriods: '1',
          DatapointsToAlarm: '1',
          Threshold: '250',
          ComparisonOperator: 'GreaterThanThreshold',
          TreatMissingData: 'missing',
        },
      },
      ServerlessGraphQLLambdaAlarm: {
        DependsOn: ['ServerlessAlarmsSns'],
        Type: 'AWS::CloudWatch::Alarm',
        Properties: {
          AlarmName: `${API_GRAPHQL_LAMBDA_NAME}-lambda-alarm`,
          AlarmActions: [{ Ref: 'ServerlessAlarmsSns' }],
          MetricName: 'ConcurrentExecutions',
          Namespace: 'AWS/Lambda',
          Statistic: 'Maximum',
          Dimensions: [
            {
              Name: 'FunctionName',
              Value: API_GRAPHQL_LAMBDA_NAME,
            },
            {
              Name: 'Resource',
              Value: API_GRAPHQL_LAMBDA_NAME,
            },
          ],
          Period: '300',
          EvaluationPeriods: '1',
          DatapointsToAlarm: '1',
          Threshold: '250',
          ComparisonOperator: 'GreaterThanThreshold',
          TreatMissingData: 'missing',
        },
      },
      ServerlessApiGatewayAlarm: {
        DependsOn: ['ServerlessAlarmsSns'],
        Type: 'AWS::CloudWatch::Alarm',
        Properties: {
          AlarmName: `${config.env.toLowerCase()}-api-gateway-alarm`,
          AlarmActions: [{ Ref: 'ServerlessAlarmsSns' }],
          MetricName: '5XXError',
          Namespace: 'AWS/ApiGateway',
          Statistic: 'Sum',
          Dimensions: [
            {
              Name: 'ApiName',
              Value: `${config.env.toLowerCase()}-${packageConfig.name.toLowerCase()}`,
            },
          ],
          Period: '120',
          EvaluationPeriods: '1',
          DatapointsToAlarm: '1',
          Threshold: '10',
          ComparisonOperator: 'GreaterThanThreshold',
          TreatMissingData: 'missing',
        },
      },
    }
  : {};
