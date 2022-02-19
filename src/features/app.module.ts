import { Module } from '@nestjs/common';
import { config } from '../config';
import { GraphQLModule } from '../features/graphql/graphql.module';
import { logger } from '../utils';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';

@Module({
  imports: [GraphQLModule, RestModule],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();

    logger.debug(
      `✅ Server started on ${config.app.host} (port: ${config.app.port}).`,
    );
  }
}
