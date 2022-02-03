import { SignInUserModel } from '@features/_auth/auth.models';
import { AuthService } from '@features/_auth/auth.service';
import { AuthUserInput } from '@features/_auth/dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => SignInUserModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignInUserModel)
  async signIn(
    @Args('authUserData') authUserData: AuthUserInput,
  ): Promise<SignInUserModel> {
    return this.authService.signIn(authUserData);
  }
}
