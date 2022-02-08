import {
  AuthAnonymousResult,
  AuthUserResult,
  WrongCredentialsError,
} from '@features/graphql/auth/types';
import { createUnionType } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

export const SignInUserPayload = createUnionType({
  name: 'SignInUserPayload',
  types: () => [AuthUserResult, WrongCredentialsError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return AuthUserResult.name;
    return payload.code;
  },
});

export const SignInAnonymousPayload = createUnionType({
  name: 'SignInAnonymousPayload',
  types: () => [AuthAnonymousResult],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError))
      return AuthAnonymousResult.name;
    return payload.code;
  },
});
