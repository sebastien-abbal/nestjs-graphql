import { graphqlConfig } from '@config';
import { UsersModule } from '@features/graphql/users/users.module';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UsersModule,
    NESTJSGraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: graphqlConfig().generatedSchemaFileLocation,
      sortSchema: true,
      debug: graphqlConfig().isDebugEnabled,
      introspection: true,
      playground: graphqlConfig().isPlaygroundEnabled
        ? {
            settings: { 'schema.polling.enable': false },
          }
        : false,
    }),
  ],
})
export class GraphQLModule {}
