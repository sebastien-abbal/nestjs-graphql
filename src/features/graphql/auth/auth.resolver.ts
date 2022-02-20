import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '../../../utils';
import { GraphQLAuthService } from '../auth/services';
import {
  AuthAnonymousPayload,
  AuthRefreshPayload,
  AuthUserInput,
  AuthUserPayload,
  AuthUserSuccess,
  UserBannedError,
  UserDeletedError,
  WrongAuthTokenFormatError,
  WrongCredentialsError,
} from '../auth/types';
import { UserService } from '../user/services';
import { AuthRefreshInput } from './types/inputs/auth-refresh.inputs';

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

    const authUserPayload = this.authService.authUser({
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
    return this.authService.authAnonymous();
  }

  @Mutation(() => AuthRefreshPayload)
  async authRefresh(
    @Args('data') data: AuthRefreshInput,
  ): Promise<typeof AuthRefreshPayload> {
    const { refreshToken } = data;
    const decodedTokenPayload = this.authService.authenticateToken({
      token: refreshToken,
    });

    if (
      !decodedTokenPayload ||
      typeof decodedTokenPayload !== 'object' ||
      !('type' in decodedTokenPayload) ||
      decodedTokenPayload.type !== 'REFRESH_TOKEN'
    )
      return new TypenameGraphQLError(WrongAuthTokenFormatError.name);

    const targetedUser = decodedTokenPayload?.userID
      ? await this.userService.getUser({
          where: { id: decodedTokenPayload.userID },
        })
      : null;

    if (targetedUser && Boolean(targetedUser.deletedAt))
      return new TypenameGraphQLError(UserDeletedError.name);

    if (targetedUser && Boolean(targetedUser.bannedAt))
      return new TypenameGraphQLError(UserBannedError.name);

    return this.authService.authRefresh({
      targetedUser,
    });
  }
}
