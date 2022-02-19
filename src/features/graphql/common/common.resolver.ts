import { Query, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '../../../utils';
import { CommonService } from './services';
import { TestFailedError, TestPayload } from './types';

@Resolver(() => Boolean)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query(() => TestPayload)
  test(): typeof TestPayload {
    const status = this.commonService.getTestResponse();
    if (status !== 'ok') return new TypenameGraphQLError(TestFailedError.name);
    return { status };
  }
}
