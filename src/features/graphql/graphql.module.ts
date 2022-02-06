import { ConfigModule, graphqlConfig } from '@config';
import { AppService } from '@features/app.service';
import { AuthModule } from '@features/auth/auth.module';
import { CommonModule } from '@features/graphql/common/common.module';
import { UsersModule } from '@features/graphql/users/users.module';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ComplexityPlugin } from './_plugins/complexity.plugin';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    NESTJSGraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'generated/graphql.schema.ts'),
      },
      autoSchemaFile: false,
      sortSchema: false,
      debug: graphqlConfig().isDebugEnabled,
      introspection: true,
      context: ({ req }) => ({ req }),
      playground: graphqlConfig().isPlaygroundEnabled
        ? {
            settings: { 'schema.polling.enable': false },
          }
        : false,
    }),
    UsersModule,
    CommonModule,
  ],
  providers: [AppService, ComplexityPlugin],
})
export class GraphQLModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();
  }
}
