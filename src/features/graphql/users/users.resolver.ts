import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { UserModel } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserModel, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): UserModel {
    return this.usersService.getUser(getUserArgs);
  }

  @Query(() => [UserModel], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): UserModel[] {
    return this.usersService.getUsers(getUsersArgs);
  }

  @Mutation(() => UserModel)
  createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): UserModel {
    return this.usersService.createUser(createUserData);
  }

  @Mutation(() => UserModel)
  updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): UserModel {
    return this.usersService.updateUser(updateUserData);
  }

  @Mutation(() => UserModel)
  deleteUser(
    @Args('deleteUserData') deleteUserData: DeleteUserInput,
  ): UserModel {
    return this.usersService.deleteUser(deleteUserData);
  }
}
