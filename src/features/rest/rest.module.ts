import { ConfigModule } from '@config';
import { AppService } from '@features/app.service';
import { AuthModule } from '@features/auth/auth.module';
import { DefaultModule } from '@features/rest/default/default.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule, AuthModule, DefaultModule],
  providers: [AppService],
})
export class RestModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();
  }
}
