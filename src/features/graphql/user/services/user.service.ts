import { constants } from '@config';
import { User } from '@features/graphql/user/entities';
import {
  UserCreateInputs,
  UsersOrderFilters,
  UsersWhereFilters,
  UserUpdateInputs,
  UserWhereFilters,
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

  public async getUser({ where }: { where: UserWhereFilters }): Promise<User> {
    const { userID, ...rest } = where;

    const user = await this.userRepository.findOne({
      where: userID
        ? {
            id: userID,
            ...rest,
            deletedAt: null,
          }
        : { ...rest, deletedAt: null },
    });
    return user;
  }

  public async getUsers({
    where,
    order,
    skip,
    take,
  }: {
    where?: UsersWhereFilters;
    order?: UsersOrderFilters;
    skip?: number;
    take?: number;
  }): Promise<User[]> {
    const tableName = User.name.toLowerCase();
    const queryBuilder = this.userRepository.createQueryBuilder(tableName);

    if (where) {
      const { userIDs, emails, firstName, lastName, ...whereRest } = where;

      if (userIDs?.length)
        queryBuilder.andWhere('user.id IN (:...userIDs)', { userIDs });

      if (emails?.length)
        queryBuilder.andWhere('user.email IN (:...emails)', { emails });

      if (firstName)
        queryBuilder.andWhere(
          `unaccent(user.firstName) LIKE ('%' || unaccent(:firstName) || '%')`,
          {
            firstName: capitalize(firstName.toLowerCase()),
          },
        );

      if (lastName)
        queryBuilder.andWhere(
          `unaccent(user.lastName) LIKE ('%' || unaccent(:lastName) || '%')`,
          {
            lastName: lastName.toUpperCase(),
          },
        );

      if (whereRest && Object.keys(whereRest).length) {
        for (const key of Object.keys(whereRest)) {
          const params = {};
          params[key] = whereRest[key];
          queryBuilder.andWhere(`user.${key} = :${key}`, params);
        }
      }
    }
    queryBuilder.andWhere('user.deletedAt IS NULL');

    if (order) {
      for (const [key, value] of Object.entries(order)) {
        queryBuilder.addOrderBy(`user.${key}`, value);
      }
    }

    const users = await queryBuilder
      .take(
        clamp(
          constants.graphql.query.minResults,
          constants.graphql.query.maxResults,
          take,
        ),
      )
      .skip(skip ? skip : constants.graphql.query.defaultSkip)
      .getMany();

    return users;
  }

  public async userCreate({ data }: { data: UserCreateInputs }): Promise<User> {
    const user = await this.userRepository.save({
      ...data,
      firstName: capitalize(data.firstName.toLowerCase()),
      lastName: data.lastName.toUpperCase(),
      email: data.email.toLowerCase(),
      password: await hash(data.password, 10),
    });
    return user;
  }

  public async userUpdate({
    userID,
    data,
  }: {
    userID: string;
    data: UserUpdateInputs;
  }): Promise<User> {
    const { password, ...updateData } = data;

    if (password) updateData['password'] = await hash(data.password, 10);
    if (updateData?.firstName)
      updateData.firstName = capitalize(updateData.firstName.toLowerCase());
    if (updateData?.lastName)
      updateData.lastName = updateData.lastName.toUpperCase();
    if (updateData?.email) updateData.email = updateData.email.toLowerCase();

    await this.userRepository.update(userID, updateData);

    const user = this.getUser({ where: { userID } });
    return user;
  }

  public async userDelete({ userID }: { userID: string }): Promise<void> {
    await this.userRepository.update(userID, {
      deletedAt: new Date(),
    });
  }
}
