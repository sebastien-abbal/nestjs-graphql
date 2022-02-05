import { AuthResult } from '@features/auth/types';
import { createUnionType } from '@nestjs/graphql';
import { WrongCredentialsError } from '../models/auth.errors';

export const SignInPayload = createUnionType({
  name: 'SignInPayload',
  types: () => [AuthResult, WrongCredentialsError],
});
