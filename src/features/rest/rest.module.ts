import { Module } from '@nestjs/common';
import { RestAuthModule } from './auth/auth.module';
import { DefaultModule } from './default/default.module';

@Module({
  imports: [RestAuthModule, DefaultModule],
  providers: [],
})
export class RestModule {}
