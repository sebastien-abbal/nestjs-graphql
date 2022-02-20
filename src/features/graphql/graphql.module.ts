import { config } from '@config';
import { GraphQLAuthModule } from '@features/graphql/auth/auth.module';
import { CommonModule } from '@features/graphql/common/common.module';
import { UserModule } from '@features/graphql/user/user.module';
import { GraphQLComplexityPlugin } from '@features/graphql/_plugins';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLAuthModule,
    NESTJSGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
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
  providers: [GraphQLComplexityPlugin],
})
export class GraphQLModule {}
