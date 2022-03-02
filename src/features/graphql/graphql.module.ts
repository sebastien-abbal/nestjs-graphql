import { config } from '@config';
import { GraphQLAuthModule } from '@features/graphql/auth/auth.module';
import { CommonModule } from '@features/graphql/common/common.module';
import { UserModule } from '@features/graphql/user/user.module';
import {
  GraphQLComplexityPlugin,
  LoggingPlugin
} from '@features/graphql/_plugins';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';
import { isCloudFunction } from 'is-cloud-function';
import { join } from 'path';
@Module({
  imports: [
    GraphQLAuthModule,
    NESTJSGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: isCloudFunction()
        ? false
        : join(process.cwd(), 'src/features/graphql/schema.gql'),
      typePaths: isCloudFunction() ? ['./**/*.gql'] : undefined,
      sortSchema: true,
      introspection: true,
      playground: config.graphql.isPlaygroundEnabled
        ? {
            settings: { 'schema.polling.enable': false },
          }
        : false,
    }),
    UserModule,
    CommonModule,
  ],
  providers: [GraphQLComplexityPlugin, LoggingPlugin],
})
export class GraphQLModule {}
