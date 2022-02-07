import { AppService } from '@features/app.service';
import { ConfigModule } from '@features/config/config.module';
import { RestAuthModule } from '@features/rest/auth/auth.module';
import { DefaultModule } from '@features/rest/default/default.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule, RestAuthModule, DefaultModule],
  providers: [AppService],
})
export class RestModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();
  }
}
