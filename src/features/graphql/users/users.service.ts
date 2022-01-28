import { GetUserArgs } from '@features/graphql/users/dto/args/get-user.args';
import { GetUsersArgs } from '@features/graphql/users/dto/args/get-users.args';
import { CreateUserInput } from '@features/graphql/users/dto/input/create-user.input';
import { DeleteUserInput } from '@features/graphql/users/dto/input/delete-user.input';
import { UpdateUserInput } from '@features/graphql/users/dto/input/update-user.input';
import { UserModel } from '@features/graphql/users/models/user.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: UserModel[] = [];

  public createUser(createUserData: CreateUserInput): UserModel {
    const user: UserModel = {
      id: uuidv4(),
      ...createUserData,
    };

    this.users.push(user);

    return user;
  }

  public updateUser(updateUserData: UpdateUserInput): UserModel {
    const user = this.users.find((user) => user.id === updateUserData.userID);

    Object.assign(user, updateUserData);

    return user;
  }

  public getUser(getUserArgs: GetUserArgs): UserModel {
    return this.users.find((user) => user.id === getUserArgs.userID);
  }

  public getUsers(getUsersArgs: GetUsersArgs): UserModel[] {
    return getUsersArgs.userIDs.map((userID) => this.getUser({ userID }));
  }

  public deleteUser(deleteUserData: DeleteUserInput): UserModel {
    const userIndex = this.users.findIndex(
      (user) => user.id === deleteUserData.userID,
    );

    const user = this.users[userIndex];

    this.users.splice(userIndex);

    return user;
  }
}
