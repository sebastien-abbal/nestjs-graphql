import {
  AuthAnonymousSuccess,
  AuthUserSuccess,
  WrongCredentialsError,
} from '../../auth/types';
import { createUnionType } from '@nestjs/graphql';
import { TypenameGraphQLError } from '../../../../utils';

export const AuthUserPayload = createUnionType({
  name: 'AuthUserPayload',
  types: () => [AuthUserSuccess, WrongCredentialsError],
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
