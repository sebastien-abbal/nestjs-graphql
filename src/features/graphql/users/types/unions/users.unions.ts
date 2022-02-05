import {
  UserNotFoundError,
  UserResult,
  UserResults,
} from '@features/graphql/users/types';
import { createUnionType } from '@nestjs/graphql';

export const UserPayload = createUnionType({
  name: 'UserPayload',
  types: () => [UserResult, UserNotFoundError],
});

export const UsersPayload = createUnionType({
  name: 'UsersPayload',
  types: () => [UserResults],
});
