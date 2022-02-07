import {
  AuthResult,
  WrongCredentialsError,
} from '@features/graphql/auth/types';
import { createUnionType } from '@nestjs/graphql';
import { GraphQLTNError } from '@utils';

export const SignInPayload = createUnionType({
  name: 'SignInPayload',
  types: () => [AuthResult, WrongCredentialsError],
  resolveType: (payload: any) => {
    if (!(payload instanceof GraphQLTNError)) return AuthResult.name;
    return payload.code;
  },
});
