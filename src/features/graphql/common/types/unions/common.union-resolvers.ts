import { HealthResult } from '@features/graphql/common/types';
import { ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLTNError } from '@utils';

@Resolver('HealthPayload')
export class HealthPayloadResolver {
  @ResolveField()
  __resolveType(payload: any) {
    if (!(payload instanceof GraphQLTNError)) return HealthResult.name;
    return payload.code;
  }
}
