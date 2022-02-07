import { CommonResolver } from '@features/graphql/common/common.resolver';
import { CommonService } from '@features/graphql/common/common.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [CommonResolver, CommonService],
})
export class CommonModule {}
