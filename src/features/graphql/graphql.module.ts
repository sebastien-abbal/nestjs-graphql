import { ConfigModule, graphqlConfig } from '@config';
import { AppService } from '@features/app.service';
import { GraphQLAuthModule } from '@features/graphql/auth/auth.module';
import { CommonModule } from '@features/graphql/common/common.module';
import { UsersModule } from '@features/graphql/users/users.module';
import { GraphQLComplexityPlugin } from '@features/graphql/_plugins';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule,
    GraphQLAuthModule,
    NESTJSGraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      autoSchemaFile: graphqlConfig().isSchemaAuto
        ? graphqlConfig().schemaFilePath
        : false,
      sortSchema: true,
      debug: graphqlConfig().isDebugEnabled,
      introspection: true,
      playground: graphqlConfig().isPlaygroundEnabled
        ? {
            settings: { 'schema.polling.enable': false },
          }
        : false,
    }),
    UsersModule,
    CommonModule,
  ],
  providers: [AppService, GraphQLComplexityPlugin],
})
export class GraphQLModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();
  }
}
