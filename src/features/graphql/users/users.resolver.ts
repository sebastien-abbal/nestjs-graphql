import {
  GraphQLAuth,
  GraphQLCurrentUser,
} from '@features/graphql/auth/auth.decorators';
import {
  NotAuthorizedError,
  ResourcesFilters,
} from '@features/graphql/common/types';
import { User } from '@features/graphql/users/entities';
import {
  CreateUserInput,
  CreateUserPayload,
  DeleteUserPayload,
  GetUserFiltersInput,
  GetUsersFiltersInput,
  UpdateUserInput,
  UpdateUserPayload,
  UserEmailAlreadyTakenError,
  UserNotFoundError,
  UserPayload,
  UserResult,
  UserRole,
  UserRoleNotRegistered,
  UsersPayload,
} from '@features/graphql/users/types';
import { UsersService } from '@features/graphql/users/users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';
import { UserIDRequiredFilter } from './types/users.args';

@Resolver(() => UserResult)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserPayload, { name: 'user' })
  @GraphQLAuth(UserRole.USER)
  async getUser(
    @Args('getUserFiltersData') getUserFiltersData: GetUserFiltersInput,
  ): Promise<typeof UserPayload | GraphQLTNError> {
    const user = await this.usersService.getUser({
      filters: getUserFiltersData,
    });
    if (!user) return generateError(UserNotFoundError.name);

    return generateResult({ user });
  }

  @Query(() => UsersPayload, { name: 'users' })
  @GraphQLAuth(UserRole.USER)
  async getUsers(
    @Args('getUsersFiltersData', { nullable: true })
    getUsersFiltersData: GetUsersFiltersInput,
    @Args() { take, skip }: ResourcesFilters,
  ): Promise<typeof UsersPayload | GraphQLTNError> {
    const users = await this.usersService.getUsers({
      filters: getUsersFiltersData,
      take,
      skip,
    });

    return generateResult({ users });
  }

  @Mutation(() => CreateUserPayload)
  @GraphQLAuth(UserRoleNotRegistered.ANONYMOUS)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<typeof CreateUserPayload | GraphQLTNError> {
    const isUserAlreadyExists = Boolean(
      await this.usersService.getUser({
        filters: { email: createUserData.email },
      }),
    );

    if (isUserAlreadyExists)
      return generateError(UserEmailAlreadyTakenError.name);

    const user = await this.usersService.createUser({ data: createUserData });
    return generateResult({ user });
  }

  @Mutation(() => UpdateUserPayload)
  @GraphQLAuth(UserRole.USER)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
    @Args() { userID }: UserIDRequiredFilter,
  ): Promise<typeof UpdateUserPayload | GraphQLTNError> {
    await this.usersService.updateUser({ userID, data: updateUserData });

    const user = this.getUser({ userID });

    return generateResult({ user });
  }

  @Mutation(() => DeleteUserPayload)
  @GraphQLAuth(UserRole.USER)
  async deleteUser(
    @Args() { userID }: UserIDRequiredFilter,
    @GraphQLCurrentUser() user: User,
  ): Promise<typeof DeleteUserPayload | GraphQLTNError> {
    if (
      !user.roles.includes(UserRole.ADMIN) &&
      !user.roles.includes(UserRole.MODERATOR) &&
      user.id !== userID
    )
      return generateError(NotAuthorizedError.name);

    await this.usersService.deleteUser({ userID });

    return generateResult({ isDeleted: true });
  }
}
