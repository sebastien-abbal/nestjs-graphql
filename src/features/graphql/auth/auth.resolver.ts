import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import {
  AuthUserInput,
  AuthUserResult,
  SignInAnonymousPayload,
  SignInUserPayload,
  WrongCredentialsError,
} from '@features/graphql/auth/types';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

@Resolver(() => AuthUserResult)
export class GraphQLAuthResolver {
  constructor(private readonly authService: GraphQLAuthService) {}

  @Mutation(() => SignInUserPayload)
  async signInUser(
    @Args('authUserData') authUserData: AuthUserInput,
  ): Promise<typeof SignInUserPayload | TypenameGraphQLError> {
    const signInUserPayload = await this.authService.signInUser({
      data: authUserData,
    });

    if (!signInUserPayload.user || !signInUserPayload.accessToken)
      return new TypenameGraphQLError(WrongCredentialsError.name);

    return signInUserPayload;
  }

  @Mutation(() => SignInAnonymousPayload)
  async signInAnonymous(): Promise<
    typeof SignInAnonymousPayload | TypenameGraphQLError
  > {
    const signInAnonymousPayload = await this.authService.signInAnonymous();

    return signInAnonymousPayload;
  }
}
