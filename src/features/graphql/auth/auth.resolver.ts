import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import {
  AuthResult,
  AuthUserInput,
  SignInPayload,
  WrongCredentialsError,
} from '@features/graphql/auth/types';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';

@Resolver(() => AuthResult)
export class GraphQLAuthResolver {
  constructor(private readonly authService: GraphQLAuthService) {}

  @Mutation(() => SignInPayload)
  async signIn(
    @Args('authUserData') authUserData: AuthUserInput,
  ): Promise<typeof SignInPayload | GraphQLTNError> {
    const signInPayload = await this.authService.signIn(authUserData);

    if (!signInPayload.user || !signInPayload.accessToken)
      return generateError(WrongCredentialsError.name);

    return generateResult(signInPayload);
  }
}
