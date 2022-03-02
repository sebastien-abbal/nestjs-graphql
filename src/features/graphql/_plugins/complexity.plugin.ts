import { config } from '@config';
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
              defaultComplexity: config.graphql.complexity.defaultValue,
            }),
          ],
        });
        if (complexity > config.graphql.complexity.max) {
          throw new PayloadTooLargeException(
            `Query is too complex: ${complexity} points. Maximum allowed complexity: ${config.graphql.complexity.max}.`,
          );
        }
      },
    };
  }
}
