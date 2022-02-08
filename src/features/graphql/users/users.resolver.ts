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
import { TypenameGraphQLError } from '@utils';
import { UserIDRequiredFilter } from './types/users.args';

@Resolver(() => UserResult)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserPayload, { name: 'user' })
  @GraphQLAuth(UserRole.USER)
  async getUser(
    @Args('getUserFiltersData') getUserFiltersData: GetUserFiltersInput,
  ): Promise<typeof UserPayload | TypenameGraphQLError> {
    const user = await this.usersService.getUser({
      filters: getUserFiltersData,
    });
    if (!user) return new TypenameGraphQLError(UserNotFoundError.name);

    return { user };
  }

  @Query(() => UsersPayload, { name: 'users' })
  @GraphQLAuth(UserRole.USER)
  async getUsers(
    @Args('getUsersFiltersData', { nullable: true })
    getUsersFiltersData: GetUsersFiltersInput,
    @Args() { take, skip }: ResourcesFilters,
  ): Promise<typeof UsersPayload | TypenameGraphQLError> {
    const users = await this.usersService.getUsers({
      filters: getUsersFiltersData,
      take,
      skip,
    });

    return { users };
  }

  @Mutation(() => CreateUserPayload)
  @GraphQLAuth(UserRoleNotRegistered.ANONYMOUS)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<typeof CreateUserPayload | TypenameGraphQLError> {
    const isUserAlreadyExists = Boolean(
      await this.usersService.getUser({
        filters: { email: createUserData.email },
      }),
    );

    if (isUserAlreadyExists)
      return new TypenameGraphQLError(UserEmailAlreadyTakenError.name);

    const user = await this.usersService.createUser({ data: createUserData });
    return { user };
  }

  @Mutation(() => UpdateUserPayload)
  @GraphQLAuth(UserRole.USER)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
    @Args() { userID }: UserIDRequiredFilter,
  ): Promise<typeof UpdateUserPayload | TypenameGraphQLError> {
    await this.usersService.updateUser({ userID, data: updateUserData });

    const user = await this.usersService.getUser({ filters: { userID } });

    return { user };
  }

  @Mutation(() => DeleteUserPayload)
  @GraphQLAuth(UserRole.USER)
  async deleteUser(
    @Args() { userID }: UserIDRequiredFilter,
    @GraphQLCurrentUser() user: User,
  ): Promise<typeof DeleteUserPayload | TypenameGraphQLError> {
    if (
      !user.roles.includes(UserRole.ADMIN) &&
      !user.roles.includes(UserRole.MODERATOR) &&
      user.id !== userID
    )
      return new TypenameGraphQLError(NotAuthorizedError.name);

    await this.usersService.deleteUser({ userID });

    return { isDeleted: true };
  }
}
