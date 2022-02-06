import { Query, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';
import { CommonService } from './common.service';
import { HealthFailedError } from './types';
import { HealthPayload } from './types/unions/common.unions';

@Resolver(() => Boolean)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query(() => HealthPayload, { name: 'health' })
  getHealth(): typeof HealthPayload | GraphQLTNError {
    const status = this.commonService.getGraphQLHealth();
    if (status !== 'ok') return generateError(HealthFailedError.name);
    return generateResult({ status });
  }
}
