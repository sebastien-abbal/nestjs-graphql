import { Plugin } from '@nestjs/apollo';
import { PayloadTooLargeException } from '@nestjs/common';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from 'graphql-query-complexity';
import { constants } from '../../../config';

@Plugin()
export class GraphQLComplexityPlugin implements ApolloServerPlugin {
  constructor(private gqlSchemaHost: GraphQLSchemaHost) {}

  async requestDidStart(): Promise<GraphQLRequestListener> {
    const { schema } = this.gqlSchemaHost;

    return {
      async didResolveOperation({ request, document }) {
        const complexity = getComplexity({
          schema,
          operationName: request.operationName,
          query: document,
          variables: request.variables,
          estimators: [
            fieldExtensionsEstimator(),
            simpleEstimator({
              defaultComplexity: constants.graphql.complexity.defaultValue,
            }),
          ],
        });
        if (complexity > constants.graphql.complexity.max) {
          throw new PayloadTooLargeException(
            `Query is too complex: ${complexity} points. Maximum allowed complexity: ${constants.graphql.complexity.max}.`,
          );
        }
      },
    };
  }
}
