import { TestFailedError, TestPayload } from '@features/graphql/common/types';
import { Query, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';
import { CommonService } from './common.service';

@Resolver(() => Boolean)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query(() => TestPayload, { name: 'test' })
  getHealth(): typeof TestPayload | TypenameGraphQLError {
    const status = this.commonService.getTestResponse();
    if (status !== 'ok') return new TypenameGraphQLError(TestFailedError.name);
    return { status };
  }
}
