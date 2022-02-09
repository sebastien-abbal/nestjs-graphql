import { constants } from '@config';
import { User } from '@features/graphql/user/entities';
import {
  CreateUserInput,
  GetUserFiltersInput,
  GetUsersFiltersInput,
  UpdateUserInput,
} from '@features/graphql/user/types';
import { Inject, Injectable } from '@nestjs/common';
import { capitalize, clamp } from '@utils';
import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  public async getUser({
    filters,
  }: {
    filters: GetUserFiltersInput;
  }): Promise<User> {
    const { userID, email } = filters;

    const user = await this.userRepository.findOne({
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
    const queryBuilder = this.userRepository.createQueryBuilder('user');

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
    const user = await this.userRepository.save({
      ...data,
      firstName: capitalize(data.firstName.toLowerCase()),
      lastName: data.lastName.toUpperCase(),
      email: data.email.toLowerCase(),
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
    const { password, ...updateData } = data;

    if (password) updateData['password'] = await hash(data.password, 10);
    if (updateData?.firstName)
      updateData.firstName = capitalize(updateData.firstName.toLowerCase());
    if (updateData?.lastName)
      updateData.lastName = updateData.lastName.toUpperCase();
    if (updateData?.email) updateData.email = updateData.email.toLowerCase();

    await this.userRepository.update(userID, updateData);

    const user = this.getUser({ filters: { userID } });
    return user;
  }

  public async deleteUser({ userID }: { userID: string }): Promise<void> {
    await this.userRepository.update(userID, {
      deletedAt: new Date(),
    });
  }
}
