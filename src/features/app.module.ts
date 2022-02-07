import { AppService } from '@features/app.service';
import { ConfigModule } from '@features/config/config.module';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { RestModule } from '@features/rest/rest.module';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { logger } from '@utils';

@Module({
  imports: [ConfigModule, GraphQLModule, RestModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {
    if (!this.appService.checkEnv()) process.exit();

    logger.debug(
      `✅ Server started on ${this.configService.get<string>(
        'host',
      )} (port: ${this.configService.get<number>('port')}).`,
    );
  }
}
