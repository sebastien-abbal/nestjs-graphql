import { constants } from '@config';
import { User } from '@features/graphql/users/entities';
import {
  CreateUserInput,
  GetUserFiltersInput,
  GetUsersFiltersInput,
  UpdateUserInput,
} from '@features/graphql/users/types';
import { Inject, Injectable } from '@nestjs/common';
import { clamp } from '@utils';
import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  public async getUser({
    filters,
  }: {
    filters: GetUserFiltersInput;
  }): Promise<User> {
    const { userID, email } = filters;

    const user = await this.usersRepository.findOne({
      where: [
        { id: userID, deletedAt: null },
        { email, deletedAt: null },
      ],
    });
    return user;
  }

  public async getUsers({
    filters,
    skip,
    take,
  }: {
    filters: GetUsersFiltersInput;
    skip?: number;
    take?: number;
  }): Promise<User[]> {
    const queryBuilder = this.usersRepository.createQueryBuilder('user');

    if (filters) {
      const { userIDs, userRoles, firstName, lastName } = filters;

      if (userIDs?.length)
        queryBuilder.andWhere('user.id IN (:...userIDs)', { userIDs });

      if (userRoles?.length)
        queryBuilder.andWhere('user.role IN (:...userRoles)', { userRoles });

      if (firstName)
        queryBuilder.andWhere('user.firstname LIKE %firstName%', { firstName });

      if (lastName)
        queryBuilder.andWhere('user.lastName LIKE %lastName%', { lastName });
    }

    queryBuilder.take(
      clamp(
        constants.graphql.query.minResults,
        constants.graphql.query.maxResults,
        take,
      ),
    );
    queryBuilder.skip(skip ? skip : constants.graphql.query.defaultSkip);

    const users = await queryBuilder.getMany();
    return users;
  }

  public async createUser({ data }: { data: CreateUserInput }): Promise<User> {
    const user = await this.usersRepository.save({
      ...data,
      password: await hash(data.password, 10),
    });
    return user;
  }

  public async updateUser({
    userID,
    data,
  }: {
    userID: string;
    data: UpdateUserInput;
  }): Promise<User> {
    await this.usersRepository.update(userID, data);
    const user = this.getUser({ filters: { userID } });
    return user;
  }

  public async deleteUser({ userID }: { userID: string }): Promise<void> {
    await this.usersRepository.update(userID, {
      deletedAt: new Date(),
    });
  }
}
