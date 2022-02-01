import { ConfigModule } from '@config';
import { AppService } from '@features/app.service';
import { DefaultModule } from '@features/rest/default/default.module';
import { AuthModule } from '@features/_auth/auth.module';
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
