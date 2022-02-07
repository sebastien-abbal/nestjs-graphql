import { TestFailedError, TestPayload } from '@features/graphql/common/types';
import { Query, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';
import { CommonService } from './common.service';

@Resolver(() => Boolean)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query(() => TestPayload, { name: 'test' })
  getHealth(): typeof TestPayload | GraphQLTNError {
    const status = this.commonService.getTestResponse();
    if (status !== 'ok') return generateError(TestFailedError.name);
    return generateResult({ status });
  }
}
