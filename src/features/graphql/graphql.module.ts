import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { config } from '../../config';
import { GraphQLAuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { GraphQLComplexityPlugin } from './_plugins';

@Module({
  imports: [
    GraphQLAuthModule,
    NESTJSGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/@graphql/schema.gql'),
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
