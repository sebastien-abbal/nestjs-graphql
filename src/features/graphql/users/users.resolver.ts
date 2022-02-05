import {
  CreateUserInput,
  DeleteUserInput,
  GetUserArgs,
  GetUsersArgs,
  UpdateUserInput,
} from '@features/graphql/users/dto';
import { User } from '@features/graphql/users/entities';
import { UsersService } from '@features/graphql/users/users.service';
import { GraphQLAuth } from '@features/_auth/auth.decorators';
import { UserRole } from '@generated/graphql.schema';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  @GraphQLAuth(UserRole.USER)
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.usersService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  @GraphQLAuth(UserRole.MODERATOR, UserRole.ADMIN)
  async getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
    return this.usersService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserData);
  }

  @Mutation(() => User)
  @GraphQLAuth(UserRole.USER)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<void> {
    return this.usersService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  @GraphQLAuth(UserRole.USER)
  async deleteUser(
    @Args('deleteUserData') deleteUserData: DeleteUserInput,
  ): Promise<void> {
    return this.usersService.deleteUser(deleteUserData);
  }
}
