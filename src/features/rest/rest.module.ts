import { RestAuthModule } from '@features/rest/auth/auth.module';
import { DefaultModule } from '@features/rest/default/default.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RestAuthModule, DefaultModule],
  providers: [],
})
export class RestModule {}
