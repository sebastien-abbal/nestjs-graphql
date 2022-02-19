import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  User,
  UserCreateInput,
  UserOrderByWithRelationInput,
  UserRole,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from '../../../@graphql/generated';
import { TypenameGraphQLError } from '../../../utils';
import { ResourcesFilters } from '../../database/types';
import { GraphQLAuth, GraphQLCurrentUser } from '../auth/auth.decorators';
import { UserRoleNotRegistered } from '../auth/types';
import { NotAuthorizedError } from '../common/types';
import { UserService } from './services';
import {
  UserAlreadyExistsError,
  UserCreatePayload,
  UserDeletePayload,
  UserNotFoundError,
  UserPayload,
  UsersPayload,
  UserSuccess,
  UserUpdatePayload,
} from './types';

@Resolver(() => UserSuccess)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserPayload)
  @GraphQLAuth(UserRole.USER)
  async user(where: UserWhereUniqueInput): Promise<typeof UserPayload> {
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
    @Args('cursor') cursor?: UserWhereUniqueInput,
    @Args('where') where?: UserWhereInput,
    @Args('orderBy') orderBy?: UserOrderByWithRelationInput,
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
    @Args('data') data: UserCreateInput,
  ): Promise<typeof UserCreatePayload> {
    const isUserAlreadyExists = Boolean(
      await this.userService.getUser({
        where: { email: data.email },
      }),
    );

    if (isUserAlreadyExists)
      return new TypenameGraphQLError(UserAlreadyExistsError.name);

    const createdUser = await this.userService.userCreate({
      data,
    });
    return { user: createdUser };
  }

  @Mutation(() => UserUpdatePayload)
  @GraphQLAuth(UserRole.USER)
  async userUpdate(
    @Args('where') where: UserWhereUniqueInput,
    @Args('data') data: UserUpdateInput,
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
