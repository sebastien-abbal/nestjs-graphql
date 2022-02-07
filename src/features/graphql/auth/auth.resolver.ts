import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import {
  AuthUserInput,
  AuthUserResult,
  SignInAnonymousPayload,
  SignInUserPayload,
  WrongCredentialsError,
} from '@features/graphql/auth/types';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';

@Resolver(() => AuthUserResult)
export class GraphQLAuthResolver {
  constructor(private readonly authService: GraphQLAuthService) {}

  @Mutation(() => SignInUserPayload)
  async signInUser(
    @Args('authUserData') authUserData: AuthUserInput,
  ): Promise<typeof SignInUserPayload | GraphQLTNError> {
    const signInUserPayload = await this.authService.signInUser(authUserData);

    if (!signInUserPayload.user || !signInUserPayload.accessToken)
      return generateError(WrongCredentialsError.name);

    return generateResult(signInUserPayload);
  }

  @Mutation(() => SignInAnonymousPayload)
  async signInAnonymous(): Promise<
    typeof SignInAnonymousPayload | GraphQLTNError
  > {
    const signInAnonymousPayload = await this.authService.signInAnonymous();

    return generateResult(signInAnonymousPayload);
  }
}
