import { PrismaService } from '@features/database/services';
import {
  UserCreateOneInput,
  UserUpdateOneInput,
} from '@features/graphql/user/types';
import { Injectable } from '@nestjs/common';
import {
  User,
  UserOrderByWithRelationInput,
  UserRole,
  UserWhereInput,
  UserWhereUniqueInput,
} from '@types';
import { capitalize } from '@utils';
import { hashSync } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  public async getUser({
    where,
  }: {
    where: UserWhereUniqueInput;
  }): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where,
    });
    return user;
  }

  public async getUsers({
    cursor,
    where,
    orderBy,
    skip,
    take,
  }: {
    cursor?: UserWhereUniqueInput;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput;
    skip?: number;
    take?: number;
  }): Promise<User[]> {
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  public async userCreate({
    data,
  }: {
    data: UserCreateOneInput;
  }): Promise<User> {
    const { firstName, lastName, email, password, ...createData } = data;

    const user = await this.prisma.user.create({
      data: {
        ...createData,
        roles: [UserRole.USER],
        firstName: firstName ? capitalize(firstName.toLowerCase()) : undefined,
        lastName: lastName ? lastName.toUpperCase() : undefined,
        email: email ? email.toLowerCase() : undefined,
        password: password ? hashSync(data.password) : undefined,
      },
    });
    return user;
  }

  public async userUpdate({
    where,
    data,
  }: {
    where: UserWhereUniqueInput;
    data: UserUpdateOneInput;
  }): Promise<User> {
    const { firstName, lastName, email, password, ...updateData } = data;

    const user = await this.prisma.user.update({
      where,
      data: {
        ...updateData,
        firstName: firstName ? capitalize(firstName.toLowerCase()) : undefined,
        lastName: lastName ? lastName.toUpperCase() : undefined,
        email: email ? email.toLowerCase() : undefined,
        password: password ? hashSync(data.password) : undefined,
      },
    });

    return user;
  }

  public async userDelete({
    where,
  }: {
    where: UserWhereUniqueInput;
  }): Promise<void> {
    await this.prisma.user.update({
      where,
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
