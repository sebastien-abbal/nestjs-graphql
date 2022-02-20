import {
  AuthAnonymousSuccess,
  AuthRefreshSuccess,
  AuthUserSuccess,
  UserBannedError,
  UserDeletedError,
  WrongAuthTokenFormatError,
  WrongCredentialsError,
} from '@features/graphql/auth/types';
import { createUnionType } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

export const AuthUserPayload = createUnionType({
  name: 'AuthUserPayload',
  types: () => [
    AuthUserSuccess,
    WrongCredentialsError,
    UserBannedError,
    UserDeletedError,
  ],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return AuthUserSuccess.name;
    return payload.code;
  },
});

export const AuthAnonymousPayload = createUnionType({
  name: 'AuthAnonymousPayload',
  types: () => [AuthAnonymousSuccess],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError))
      return AuthAnonymousSuccess.name;
    return payload.code;
  },
});

export const AuthRefreshPayload = createUnionType({
  name: 'AuthRefreshPayload',
  types: () => [
    AuthRefreshSuccess,
    WrongAuthTokenFormatError,
    UserBannedError,
    UserDeletedError,
  ],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError))
      return AuthRefreshSuccess.name;
    return payload.code;
  },
});
