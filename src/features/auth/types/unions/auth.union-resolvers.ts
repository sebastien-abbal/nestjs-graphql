import { AuthResult } from '@features/auth/types';
import { ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLTNError } from '@utils';

@Resolver('SignInPayload')
export class SignInPayloadResolver {
  @ResolveField()
  __resolveType(payload: any) {
    if (!(payload instanceof GraphQLTNError)) return AuthResult.name;
    return payload.code;
  }
}
