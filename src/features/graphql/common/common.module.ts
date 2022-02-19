import { Module } from '@nestjs/common';
import { CommonResolver } from './common.resolver';
import { CommonService } from './services';

@Module({
  providers: [CommonResolver, CommonService],
})
export class CommonModule {}
