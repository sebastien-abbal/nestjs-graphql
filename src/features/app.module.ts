import { Module } from '@nestjs/common';
import { GraphQLModule } from '../features/graphql/graphql.module';
import { RestModule } from './rest/rest.module';

@Module({
  imports: [GraphQLModule, RestModule],
  providers: [],
})
export class AppModule {}
