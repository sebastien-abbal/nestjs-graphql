import { constants, defaultConfig, graphqlConfig } from '@config';
import { DatabaseModule } from '@features/database/database.module';
import { DefaultModule } from '@features/default/default.module';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { logger } from '@utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [defaultConfig, graphqlConfig],
    }),
    DefaultModule,
    GraphQLModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {
    if (!constants.app.envsAvailable.includes(configService.get('env'))) {
      logger.error(
        `❌ [${configService.get(
          'env',
        )}] env is not found in the app available envs (${constants.app.envsAvailable.join(
          ',',
        )})`,
      );
      process.exit(1);
    }

    logger.debug(
      `✅ Server started on ${this.configService.get(
        'host',
      )} (port: ${this.configService.get('port')}).`,
    );
  }
}
