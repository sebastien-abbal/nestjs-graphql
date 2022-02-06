import { Module } from '@nestjs/common';
import { CommonResolver } from './common.resolver';
import { CommonService } from './common.service';
import { HealthPayloadResolver } from './types/unions/common.union-resolvers';

@Module({
  imports: [],
  providers: [CommonResolver, CommonService, HealthPayloadResolver],
})
export class CommonModule {}
