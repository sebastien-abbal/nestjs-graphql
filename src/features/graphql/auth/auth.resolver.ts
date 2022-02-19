import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '../../../utils';
import { GraphQLAuthService } from '../auth/services';
import {
  AuthAnonymousPayload,
  AuthUserInput,
  AuthUserPayload,
  AuthUserSuccess,
  UserBannedError,
  UserDeletedError,
  WrongCredentialsError,
} from '../auth/types';
import { UserService } from '../user/services';

@Resolver(() => AuthUserSuccess)
export class GraphQLAuthResolver {
  constructor(
    private readonly authService: GraphQLAuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => AuthUserPayload)
  async authUser(
    @Args('data') data: AuthUserInput,
  ): Promise<typeof AuthUserPayload> {
    const { email } = data;
    const targetedUser = await this.userService.getUser({
      where: { email },
    });

    const authUserPayload = await this.authService.authUser({
      data,
      targetedUser,
    });

    if (!authUserPayload.user || !authUserPayload.accessToken)
      return new TypenameGraphQLError(WrongCredentialsError.name);

    if (Boolean(targetedUser.deletedAt))
      return new TypenameGraphQLError(UserDeletedError.name);

    if (Boolean(targetedUser.bannedAt))
      return new TypenameGraphQLError(UserBannedError.name);

    return authUserPayload;
  }

  @Mutation(() => AuthAnonymousPayload)
  async authAnonymous(): Promise<typeof AuthAnonymousPayload> {
    const authAnonymousPayload = await this.authService.authAnonymous();

    return authAnonymousPayload;
  }
}
