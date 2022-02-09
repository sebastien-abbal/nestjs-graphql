import { CommonService } from '@features/graphql/common/services';
import { TestFailedError, TestPayload } from '@features/graphql/common/types';
import { Query, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

@Resolver(() => Boolean)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query(() => TestPayload, { name: 'test' })
  getTest(): typeof TestPayload {
    const status = this.commonService.getTestResponse();
    if (status !== 'ok') return new TypenameGraphQLError(TestFailedError.name);
    return { status };
  }
}
