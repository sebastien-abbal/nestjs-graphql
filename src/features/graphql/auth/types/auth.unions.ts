import {
  AuthAnonymousResult,
  AuthUserResult,
  WrongCredentialsError,
} from '@features/graphql/auth/types';
import { createUnionType } from '@nestjs/graphql';
import { GraphQLTNError } from '@utils';

export const SignInUserPayload = createUnionType({
  name: 'SignInUserPayload',
  types: () => [AuthUserResult, WrongCredentialsError],
  resolveType: (payload: any) => {
    if (!(payload instanceof GraphQLTNError)) return AuthUserResult.name;
    return payload.code;
  },
});

export const SignInAnonymousPayload = createUnionType({
  name: 'SignInAnonymousPayload',
  types: () => [AuthAnonymousResult],
  resolveType: (payload: any) => {
    if (!(payload instanceof GraphQLTNError)) return AuthAnonymousResult.name;
    return payload.code;
  },
});
