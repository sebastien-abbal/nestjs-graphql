import { GraphQLModule } from '@features/graphql/graphql.module';
import { RestModule } from '@features/rest/rest.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [GraphQLModule, RestModule],
  providers: [],
})
export class AppModule {}
