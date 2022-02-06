import { UserResult, UserResults } from '@features/graphql/users/types';
import { ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLTNError } from '@utils';

@Resolver('UserPayload')
export class UserPayloadResolver {
  @ResolveField()
  __resolveType(payload: any) {
    if (!(payload instanceof GraphQLTNError)) return UserResult.name;
    return payload.code;
  }
}

@Resolver('UsersPayload')
export class UsersPayloadResolver {
  @ResolveField()
  __resolveType(payload: any) {
    if (!(payload instanceof GraphQLTNError)) return UserResults.name;
    return payload.code;
  }
}

@Resolver('CreateUserPayload')
export class CreateUserPayloadResolver {
  @ResolveField()
  __resolveType(payload: any) {
    if (!(payload instanceof GraphQLTNError)) return UserResult.name;
    return payload.code;
  }
}
