import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NESTJSGraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { config } from '../../config';
import { AppService } from '../app.service';
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
      debug: config.graphql.isDebugEnabled,
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
  providers: [AppService, GraphQLComplexityPlugin],
})
export class GraphQLModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();
  }
}
