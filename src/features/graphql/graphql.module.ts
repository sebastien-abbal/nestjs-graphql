import { ConfigModule, graphqlConfig } from '@config';
import { AppService } from '@features/app.service';
import { UsersModule } from '@features/graphql/users/users.module';
import { AuthModule } from '@features/_auth/auth.module';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
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
    UsersModule,
  ],
  providers: [AppService],
})
export class GraphQLModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();
  }
}
