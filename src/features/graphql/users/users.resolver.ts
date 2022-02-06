import { GraphQLAuth } from '@features/auth/auth.decorators';
import {
  CreateUserInput,
  CreateUserPayload,
  DeleteUserInput,
  GetUserArgs,
  GetUsersArgs,
  UpdateUserInput,
  UserEmailAlreadyTakenError,
  UserNotFoundError,
  UserPayload,
  UserResult,
  UsersPayload,
} from '@features/graphql/users/types';
import { UsersService } from '@features/graphql/users/users.service';
import { UserRole } from '@generated/graphql.schema';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';

@Resolver(() => UserResult)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserPayload, { name: 'user', nullable: true })
  @GraphQLAuth(UserRole.USER)
  async getUser(
    @Args() getUserArgs: GetUserArgs,
  ): Promise<typeof UserPayload | GraphQLTNError> {
    const user = await this.usersService.getUser(getUserArgs);
    if (!user) return generateError(UserNotFoundError.name);
    return generateResult({ user });
  }

  @Query(() => [UsersPayload], { name: 'users', nullable: 'items' })
  @GraphQLAuth(UserRole.ADMIN)
  async getUsers(
    @Args() getUsersArgs: GetUsersArgs,
  ): Promise<typeof UsersPayload | GraphQLTNError> {
    const users = await this.usersService.getUsers(getUsersArgs);

    return generateResult({ users });
  }

  @Mutation(() => UserResult)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<typeof CreateUserPayload | GraphQLTNError> {
    const isUserAlreadyExists = this.getUser({ email: createUserData.email });
    if (isUserAlreadyExists)
      return generateError(UserEmailAlreadyTakenError.name);
    const user = await this.usersService.createUser(createUserData);
    return generateResult({ user });
  }

  @Mutation(() => UserResult)
  @GraphQLAuth(UserRole.USER)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<void | GraphQLTNError> {
    return this.usersService.updateUser(updateUserData);
  }

  @Mutation(() => UserResult)
  @GraphQLAuth(UserRole.USER)
  async deleteUser(
    @Args('deleteUserData') deleteUserData: DeleteUserInput,
  ): Promise<void | GraphQLTNError> {
    return this.usersService.deleteUser(deleteUserData);
  }
}
