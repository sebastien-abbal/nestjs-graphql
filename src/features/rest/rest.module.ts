import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { RestAuthModule } from './auth/auth.module';
import { DefaultModule } from './default/default.module';

@Module({
  imports: [RestAuthModule, DefaultModule],
  providers: [AppService],
})
export class RestModule {
  constructor(private readonly appService: AppService) {
    if (!this.appService.checkEnv()) process.exit();
  }
}
