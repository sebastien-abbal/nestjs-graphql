import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '../../../utils';
import { GraphQLAuthService } from '../auth/services';
import {
  AuthAnonymousPayload,
  AuthUserInput,
  AuthUserPayload,
  AuthUserSuccess,
  WrongCredentialsError,
} from '../auth/types';

@Resolver(() => AuthUserSuccess)
export class GraphQLAuthResolver {
  constructor(private readonly authService: GraphQLAuthService) {}

  @Mutation(() => AuthUserPayload)
  async authUser(
    @Args('data') data: AuthUserInput,
  ): Promise<typeof AuthUserPayload> {
    const authUserPayload = await this.authService.authUser({
      data,
    });

    if (!authUserPayload.user || !authUserPayload.accessToken)
      return new TypenameGraphQLError(WrongCredentialsError.name);

    return authUserPayload;
  }

  @Mutation(() => AuthAnonymousPayload)
  async authAnonymous(): Promise<typeof AuthAnonymousPayload> {
    const authAnonymousPayload = await this.authService.authAnonymous();

    return authAnonymousPayload;
  }
}
