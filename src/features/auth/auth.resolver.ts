import { AuthService } from '@features/auth/auth.service';
import {
  AuthResult,
  AuthUserInput,
  SignInPayload,
  WrongCredentialsError,
} from '@features/auth/types';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { generateError, generateResult, GraphQLTNError } from '@utils';

@Resolver(() => AuthResult)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResult)
  async signIn(
    @Args('authUserData') authUserData: AuthUserInput,
  ): Promise<typeof SignInPayload | GraphQLTNError> {
    const signInPayload = await this.authService.signIn(authUserData);

    if (!signInPayload.user || !signInPayload.accessToken)
      return generateError(WrongCredentialsError.name);

    return generateResult(signInPayload);
  }
}
