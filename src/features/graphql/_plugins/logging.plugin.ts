import { Plugin } from '@nestjs/apollo';
import { deepReplace, logger } from '@utils';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener> {
    return {
      async didResolveSource(payload) {
        if (
          payload.request?.operationName &&
          payload.request.operationName !== 'IntrospectionQuery'
        ) {
          logger.info({
            action: 'GRAPHQL_QUERY',
            operationName: payload.request.operationName,
            query: payload.request.query
              ? payload.request.query.replace(/\n| /g, '')
              : '',
            variables: payload.request.variables
              ? deepReplace(
                  payload.request.variables,
                  ['password', 'email', 'phoneNumber'],
                  '***',
                )
              : {},
          });
        }
      },
      async willSendResponse(payload) {
        if (
          payload.request?.operationName &&
          payload.request.operationName !== 'IntrospectionQuery'
        ) {
          if (payload.response.data) {
            logger.info({
              action: 'GRAPHQL_RESPONSE',
              response: payload.response.data,
            });
          } else {
            logger.error({
              action: 'GRAPHQL_ERRORS',
              errors: payload.response.errors,
            });
          }
        }
      },
    };
  }
}
