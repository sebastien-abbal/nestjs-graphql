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
  DeleteUserInput,
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
  UsersPayload,
} from '@features/graphql/users/types';
import { UsersService } from '@features/graphql/users/users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';

@Resolver(() => UserResult)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserPayload, { name: 'user' })
  @GraphQLAuth(UserRole.USER)
  async getUser(
    @Args('getUserFiltersData') getUserFiltersData: GetUserFiltersInput,
  ): Promise<typeof UserPayload | GraphQLTNError> {
    const user = await this.usersService.getUser(getUserFiltersData);
    if (!user) return generateError(UserNotFoundError.name);
    return generateResult({ user });
  }

  @Query(() => UsersPayload, { name: 'users' })
  @GraphQLAuth(UserRole.ADMIN)
  async getUsers(
    @Args('getUsersFiltersData') getUsersFiltersData: GetUsersFiltersInput,
    @Args() { take, skip }: ResourcesFilters,
  ): Promise<typeof UsersPayload | GraphQLTNError> {
    const users = await this.usersService.getUsers({
      getUsersFiltersData,
      take,
      skip,
    });

    return generateResult({ users });
  }

  @Mutation(() => CreateUserPayload)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<typeof CreateUserPayload | GraphQLTNError> {
    const isUserAlreadyExists = this.getUser({ email: createUserData.email });
    if (isUserAlreadyExists)
      return generateError(UserEmailAlreadyTakenError.name);
    const user = await this.usersService.createUser(createUserData);
    return generateResult({ user });
  }

  @Mutation(() => UpdateUserPayload)
  @GraphQLAuth(UserRole.USER)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<typeof UpdateUserPayload | GraphQLTNError> {
    await this.usersService.updateUser(updateUserData);

    const user = this.getUser({ userID: updateUserData.userID });

    return generateResult({ user });
  }

  @Mutation(() => DeleteUserPayload)
  @GraphQLAuth(UserRole.USER)
  async deleteUser(
    @Args('deleteUserData') deleteUserData: DeleteUserInput,
    @GraphQLCurrentUser() user: User,
  ): Promise<typeof DeleteUserPayload | GraphQLTNError> {
    if (
      !user.roles.includes(UserRole.ADMIN) &&
      !user.roles.includes(UserRole.MODERATOR) &&
      user.id !== deleteUserData.userID
    )
      return generateError(NotAuthorizedError.name);

    await this.usersService.deleteUser(deleteUserData);

    return generateResult({ isDeleted: true });
  }
}
