import { CommonResolver } from '@features/graphql/common/common.resolver';
import { CommonService } from '@features/graphql/common/services';
import { Module } from '@nestjs/common';

@Module({
  providers: [CommonResolver, CommonService],
})
export class CommonModule {}
