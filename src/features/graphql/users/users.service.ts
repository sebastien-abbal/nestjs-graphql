import {
  CreateUserInput,
  DeleteUserInput,
  GetUserArgs,
  GetUsersArgs,
  UpdateUserInput,
} from '@features/graphql/users/dto';
import { User } from '@features/graphql/users/entities';
import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    const user = await this.usersRepository.save({
      ...createUserData,
      password: await hash(createUserData.password, 10),
    });
    return user;
  }

  public async updateUser(updateUserData: UpdateUserInput): Promise<void> {
    const { userID, ...data } = updateUserData;
    const user = await this.usersRepository.update(userID, data);
    console.log(user);
  }

  public async getUser(getUserArgs: GetUserArgs): Promise<User> {
    const { userID } = getUserArgs;
    const user = await this.usersRepository.findOne({
      where: { id: userID, deletedAt: null },
    });
    return user;
  }

  public async getUsers(getUsersArgs: GetUsersArgs): Promise<User[]> {
    const { userIDs, userRoles, firstName, lastName } = getUsersArgs;
    const queryBuilder = this.usersRepository.createQueryBuilder('user');
    if (userIDs.length)
      queryBuilder.andWhere('user.id IN (:...userIDs)', { userIDs });

    if (userRoles.length)
      queryBuilder.andWhere('user.role IN (:...userRoles)', { userRoles });

    if (firstName)
      queryBuilder.andWhere('user.firstname LIKE %firstName%', { firstName });

    if (lastName)
      queryBuilder.andWhere('user.lastName LIKE %lastName%', { lastName });

    const users = await queryBuilder.getMany();
    return users;
  }

  public async deleteUser(deleteUserData: DeleteUserInput): Promise<void> {
    const { userID } = deleteUserData;
    const user = await this.usersRepository.update(userID, {
      deletedAt: new Date(),
    });
    console.log(user);
  }
}
