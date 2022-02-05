import { ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLTNError } from '@utils';

@Resolver('UserPayload')
export class UserPayloadResolver {
  @ResolveField()
  __resolveType(payload: any) {
    if (!(payload instanceof GraphQLTNError)) return 'UserResult';
    return payload.code;
  }
}

@Resolver('UsersPayload')
export class UsersPayloadResolver {
  @ResolveField()
  __resolveType(payload) {
    if (!(payload instanceof GraphQLTNError)) return 'UserResults';
    return payload.code;
  }
}
