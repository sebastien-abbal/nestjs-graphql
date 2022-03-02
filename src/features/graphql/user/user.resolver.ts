import { ResourcesFilters } from '@features/database/types';
import {
  GraphQLAuth,
  GraphQLCurrentUser,
} from '@features/graphql/auth/auth.decorators';
import { UserRoleNotRegistered } from '@features/graphql/auth/types';
import { NotAuthorizedError } from '@features/graphql/common/types';
import { UserService } from '@features/graphql/user/services';
import {
  UserAlreadyExistsError,
  UserCreateOneInput,
  UserCreatePayload,
  UserDeletePayload,
  UserNotFoundError,
  UserPayload,
  UsersPayload,
  UserSuccess,
  UserUpdateOneInput,
  UserUpdatePayload,
} from '@features/graphql/user/types';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  User,
  UserOrderByWithRelationInput,
  UserRole,
  UserWhereInput,
  UserWhereUniqueInput,
} from '@types';
import { TypenameGraphQLError } from '@utils';

@Resolver(() => UserSuccess)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserPayload)
  @GraphQLAuth(UserRole.USER)
  async user(
    @Args('where') where: UserWhereUniqueInput,
  ): Promise<typeof UserPayload> {
    const targetedUser = await this.userService.getUser({
      where,
    });
    if (!Boolean(targetedUser))
      return new TypenameGraphQLError(UserNotFoundError.name);

    return { user: targetedUser };
  }

  @Query(() => UsersPayload)
  @GraphQLAuth(UserRole.USER)
  async users(
    @Args() filters?: ResourcesFilters,
    @Args('cursor', { nullable: true }) cursor?: UserWhereUniqueInput,
    @Args('where', { nullable: true }) where?: UserWhereInput,
    @Args('orderBy', { nullable: true }) orderBy?: UserOrderByWithRelationInput,
  ): Promise<typeof UsersPayload> {
    const targetedUsers = await this.userService.getUsers({
      cursor,
      where,
      orderBy,
      take: filters?.take,
      skip: filters?.skip,
    });

    return { users: targetedUsers };
  }

  @Mutation(() => UserCreatePayload)
  @GraphQLAuth(UserRoleNotRegistered.ANONYMOUS)
  async userCreate(
    @Args('data') data: UserCreateOneInput,
  ): Promise<typeof UserCreatePayload> {
    const { email } = data;
    const targetedUser = await this.userService.getUser({
      where: { email },
    });

    if (targetedUser && !Boolean(targetedUser?.deletedAt))
      return new TypenameGraphQLError(UserAlreadyExistsError.name);

    return {
      user: !Boolean(targetedUser?.deletedAt)
        ? await this.userService.userCreate({
            data,
          })
        : await this.userService.userUpdate({
            where: { id: targetedUser.id },
            data: {
              firstName: data.firstName ? data.firstName : undefined,
              lastName: data.lastName ? data.lastName : undefined,
              password: data.password ? data.password : undefined,
              roles: { set: [UserRole.USER] },
              deletedAt: null,
            },
          }),
    };
  }

  @Mutation(() => UserUpdatePayload)
  @GraphQLAuth(UserRole.USER)
  async userUpdate(
    @Args('where') where: UserWhereUniqueInput,
    @Args('data') data: UserUpdateOneInput,
    @GraphQLCurrentUser() currentUser: User,
  ): Promise<typeof UserUpdatePayload> {
    const targetedUser = await this.userService.getUser({ where });

    if (!Boolean(targetedUser))
      return new TypenameGraphQLError(UserNotFoundError.name);

    if (
      !currentUser.roles.includes(UserRole.ADMIN) &&
      !currentUser.roles.includes(UserRole.MODERATOR) &&
      currentUser.id !== targetedUser.id
    )
      return new TypenameGraphQLError(NotAuthorizedError.name);

    const updatedUser = await this.userService.userUpdate({
      where,
      data,
    });

    return { user: updatedUser };
  }

  @Mutation(() => UserDeletePayload)
  @GraphQLAuth(UserRole.USER)
  async userDelete(
    @Args('where') where: UserWhereUniqueInput,
    @GraphQLCurrentUser() currentUser: User,
  ): Promise<typeof UserDeletePayload> {
    const targetedUser = await this.userService.getUser({ where });

    if (!Boolean(targetedUser))
      return new TypenameGraphQLError(UserNotFoundError.name);

    if (
      !currentUser.roles.includes(UserRole.ADMIN) &&
      !currentUser.roles.includes(UserRole.MODERATOR) &&
      currentUser.id !== targetedUser.id
    )
      return new TypenameGraphQLError(NotAuthorizedError.name);

    await this.userService.userDelete({ where });

    return { isDeleted: true };
  }
}
