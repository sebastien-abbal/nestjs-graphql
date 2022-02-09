import { ResourcesFilters } from '@features/database/types';
import {
  GraphQLAuth,
  GraphQLCurrentUser,
} from '@features/graphql/auth/auth.decorators';
import { NotAuthorizedError } from '@features/graphql/common/types';
import { User } from '@features/graphql/user/entities';
import { UserService } from '@features/graphql/user/services';
import {
  UserAlreadyExistsError,
  UserCreateInputs,
  UserCreatePayload,
  UserDeletePayload,
  UserIDRequiredFilter,
  UserNotFoundError,
  UserPayload,
  UserRole,
  UserRoleNotRegistered,
  UsersOrderFilters,
  UsersPayload,
  UserSuccess,
  UsersWhereFilters,
  UserUpdateInputs,
  UserUpdatePayload,
  UserWhereFilters,
} from '@features/graphql/user/types';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

@Resolver(() => UserSuccess)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserPayload)
  @GraphQLAuth(UserRole.USER)
  async user(
    @Args('where') where: UserWhereFilters,
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
    @Args() resourcesFilters?: ResourcesFilters,
    @Args('where', { nullable: true })
    where?: UsersWhereFilters,
    @Args('order', { nullable: true })
    order?: UsersOrderFilters,
  ): Promise<typeof UsersPayload> {
    const targetedUser = await this.userService.getUsers({
      where,
      order,
      take: resourcesFilters?.take,
      skip: resourcesFilters?.skip,
    });

    return { users: targetedUser };
  }

  @Mutation(() => UserCreatePayload)
  @GraphQLAuth(UserRoleNotRegistered.ANONYMOUS)
  async userCreate(
    @Args('data') data: UserCreateInputs,
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
    @Args() { userID }: UserIDRequiredFilter,
    @Args('data') data: UserUpdateInputs,
    @GraphQLCurrentUser() currentUser: User,
  ): Promise<typeof UserUpdatePayload> {
    if (
      !currentUser.roles.includes(UserRole.ADMIN) &&
      !currentUser.roles.includes(UserRole.MODERATOR) &&
      currentUser.id !== userID
    )
      return new TypenameGraphQLError(NotAuthorizedError.name);

    const targetedUser = await this.userService.getUser({
      where: { userID },
    });

    if (!Boolean(targetedUser))
      return new TypenameGraphQLError(UserNotFoundError.name);

    const updatedUser = await this.userService.userUpdate({
      userID,
      data,
    });
    return { user: updatedUser };
  }

  @Mutation(() => UserDeletePayload)
  @GraphQLAuth(UserRole.USER)
  async userDelete(
    @Args() { userID }: UserIDRequiredFilter,
    @GraphQLCurrentUser() currentUser: User,
  ): Promise<typeof UserDeletePayload> {
    if (
      !currentUser.roles.includes(UserRole.ADMIN) &&
      !currentUser.roles.includes(UserRole.MODERATOR) &&
      currentUser.id !== userID
    )
      return new TypenameGraphQLError(NotAuthorizedError.name);

    const targetedUser = await this.userService.getUser({
      where: { userID },
    });
    if (!targetedUser) return new TypenameGraphQLError(UserNotFoundError.name);

    await this.userService.userDelete({ userID });

    return { isDeleted: true };
  }
}
