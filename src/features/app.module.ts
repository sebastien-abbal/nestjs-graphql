import { config } from '@config';
import { AppService } from '@features/app.service';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { RestModule } from '@features/rest/rest.module';
import { Module } from '@nestjs/common';
import { logger } from '@utils';

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
