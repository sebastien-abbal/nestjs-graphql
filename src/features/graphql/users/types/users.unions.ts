import {
  DeletionResult,
  NotAuthorizedError,
} from '@features/graphql/common/types';
import {
  UserEmailAlreadyTakenError,
  UserNotFoundError,
  UserResult,
  UsersResult,
} from '@features/graphql/users/types';
import { createUnionType } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

export const UserPayload = createUnionType({
  name: 'UserPayload',
  types: () => [UserResult, UserNotFoundError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UserResult.name;
    return payload.code;
  },
});

export const UsersPayload = createUnionType({
  name: 'UsersPayload',
  types: () => [UsersResult],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UsersResult.name;
    return payload.code;
  },
});

export const CreateUserPayload = createUnionType({
  name: 'CreateUserPayload',
  types: () => [UserResult, UserEmailAlreadyTakenError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UserResult.name;
    return payload.code;
  },
});

export const UpdateUserPayload = createUnionType({
  name: 'UpdateUserPayload',
  types: () => [UserResult, NotAuthorizedError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return UserResult.name;
    return payload.code;
  },
});

export const DeleteUserPayload = createUnionType({
  name: 'DeleteUserPayload',
  types: () => [DeletionResult, NotAuthorizedError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return DeletionResult.name;
    return payload.code;
  },
});
