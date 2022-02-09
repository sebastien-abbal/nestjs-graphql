import {
  DeletionSuccess,
  NotAuthorizedError,
} from '@features/graphql/common/types';
import {
  UserAlreadyExistsError,
  UserNotFoundError,
  UsersSuccess,
  UserSuccess,
} from '@features/graphql/user/types';
import { createUnionType } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

export const UserPayload = createUnionType({
  name: 'UserPayload',
  types: () => [UserSuccess, UserNotFoundError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UserSuccess.name;
    return payload.code;
  },
});

export const UsersPayload = createUnionType({
  name: 'UsersPayload',
  types: () => [UsersSuccess],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UsersSuccess.name;
    return payload.code;
  },
});

export const UserCreatePayload = createUnionType({
  name: 'UserCreatePayload',
  types: () => [UserSuccess, UserAlreadyExistsError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UserSuccess.name;
    return payload.code;
  },
});

export const UserUpdatePayload = createUnionType({
  name: 'UserUpdatePayload',
  types: () => [UserSuccess, NotAuthorizedError, UserNotFoundError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UserSuccess.name;
    return payload.code;
  },
});

export const UserDeletePayload = createUnionType({
  name: 'UserDeletePayload',
  types: () => [DeletionSuccess, NotAuthorizedError, UserNotFoundError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return DeletionSuccess.name;
    return payload.code;
  },
});
