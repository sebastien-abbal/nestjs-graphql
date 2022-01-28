import {
  CreateUserInput,
  DeleteUserInput,
  GetUserArgs,
  GetUsersArgs,
  UpdateUserInput,
} from '@features/graphql/users/dto';
import { User } from '@features/graphql/users/entities';
import { UsersService } from '@features/graphql/users/users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.usersService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
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
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<void> {
    return this.usersService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('deleteUserData') deleteUserData: DeleteUserInput,
  ): Promise<void> {
    return this.usersService.deleteUser(deleteUserData);
  }
}
