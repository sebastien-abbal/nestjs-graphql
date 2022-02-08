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
  UserAlreadyExistsError,
  UserIDRequiredFilter,
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

@Resolver(() => UserResult)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserPayload, { name: 'user' })
  @GraphQLAuth(UserRole.USER)
  async getUser(
    @Args('getUserFiltersData') getUserFiltersData: GetUserFiltersInput,
  ): Promise<typeof UserPayload> {
    const targetedUser = await this.usersService.getUser({
      filters: getUserFiltersData,
    });
    if (!Boolean(targetedUser))
      return new TypenameGraphQLError(UserNotFoundError.name);

    return { user: targetedUser };
  }

  @Query(() => UsersPayload, { name: 'users' })
  @GraphQLAuth(UserRole.USER)
  async getUsers(
    @Args() resourcesFilters?: ResourcesFilters,
    @Args('getUsersFiltersData', { nullable: true })
    getUsersFiltersData?: GetUsersFiltersInput,
  ): Promise<typeof UsersPayload> {
    const targetedUsers = await this.usersService.getUsers({
      filters: getUsersFiltersData,
      take: resourcesFilters?.take,
      skip: resourcesFilters?.skip,
    });

    return { users: targetedUsers };
  }

  @Mutation(() => CreateUserPayload)
  @GraphQLAuth(UserRoleNotRegistered.ANONYMOUS)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<typeof CreateUserPayload> {
    const isUserAlreadyExists = Boolean(
      await this.usersService.getUser({
        filters: { email: createUserData.email },
      }),
    );

    if (isUserAlreadyExists)
      return new TypenameGraphQLError(UserAlreadyExistsError.name);

    const createdUser = await this.usersService.createUser({
      data: createUserData,
    });
    return { user: createdUser };
  }

  @Mutation(() => UpdateUserPayload)
  @GraphQLAuth(UserRole.USER)
  async updateUser(
    @Args() { userID }: UserIDRequiredFilter,
    @Args('updateUserData') updateUserData: UpdateUserInput,
    @GraphQLCurrentUser() currentUser: User,
  ): Promise<typeof UpdateUserPayload> {
    if (
      !currentUser.roles.includes(UserRole.ADMIN) &&
      !currentUser.roles.includes(UserRole.MODERATOR) &&
      currentUser.id !== userID
    )
      return new TypenameGraphQLError(NotAuthorizedError.name);

    const targetedUser = await this.usersService.getUser({
      filters: { userID },
    });

    if (!Boolean(targetedUser))
      return new TypenameGraphQLError(UserNotFoundError.name);

    const updatedUser = await this.usersService.updateUser({
      userID,
      data: updateUserData,
    });
    return { user: updatedUser };
  }

  @Mutation(() => DeleteUserPayload)
  @GraphQLAuth(UserRole.USER)
  async deleteUser(
    @Args() { userID }: UserIDRequiredFilter,
    @GraphQLCurrentUser() currentUser: User,
  ): Promise<typeof DeleteUserPayload> {
    if (
      !currentUser.roles.includes(UserRole.ADMIN) &&
      !currentUser.roles.includes(UserRole.MODERATOR) &&
      currentUser.id !== userID
    )
      return new TypenameGraphQLError(NotAuthorizedError.name);

    const targetedUser = await this.usersService.getUser({
      filters: { userID },
    });
    if (!targetedUser) return new TypenameGraphQLError(UserNotFoundError.name);

    await this.usersService.deleteUser({ userID });

    return { isDeleted: true };
  }
}
