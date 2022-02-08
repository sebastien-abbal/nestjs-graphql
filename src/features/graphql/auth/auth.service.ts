import {
  AuthAnonymousResult,
  AuthUserInput,
  AuthUserResult,
} from '@features/graphql/auth/types';
import { User } from '@features/graphql/users/entities';
import { UserRoleNotRegistered } from '@features/graphql/users/types';
import { UsersService } from '@features/graphql/users/users.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthTokenType, IAuthTokenPayload } from '@types';
import { compare } from 'bcryptjs';

@Injectable()
export class GraphQLAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  public createToken({
    type,
    user,
  }: {
    type: AuthTokenType;
    user?: User;
  }): string {
    const payload: IAuthTokenPayload = {
      userID: user ? user.id : null,
      roles: user ? user.roles : [UserRoleNotRegistered.ANONYMOUS],
      type,
    };
    return this.jwtService.sign(payload, {
      expiresIn:
        type === 'ACCESS_TOKEN'
          ? this.configService.get<number>(
              'jwtAccessTokenExpirationTimeInSeconds',
            )
          : this.configService.get<number>(
              'jwtRefreshTokenExpirationTimeInSeconds',
            ),
    });
  }

  public authenticateToken({ token }: { token: string }): IAuthTokenPayload {
    try {
      const decodedToken = this.jwtService.verify(token);
      return decodedToken;
    } catch (err) {
      return null;
    }
  }

  public async signInUser({
    data,
  }: {
    data: AuthUserInput;
  }): Promise<AuthUserResult> {
    const { email, password } = data;

    const targetedUser = await this.usersService.getUser({
      filters: { email },
    });

    if (targetedUser) {
      const isPasswordValid = await compare(password, targetedUser.password);
      if (isPasswordValid)
        return {
          user: targetedUser,
          accessToken: this.createToken({
            user: targetedUser,
            type: 'ACCESS_TOKEN',
          }),
          refreshToken: this.createToken({
            user: targetedUser,
            type: 'REFRESH_TOKEN',
          }),
        };
    }

    return {
      user: null,
      accessToken: null,
      refreshToken: null,
    };
  }

  public async signInAnonymous(): Promise<AuthAnonymousResult> {
    return {
      accessToken: this.createToken({ type: 'ACCESS_TOKEN' }),
      refreshToken: this.createToken({ type: 'REFRESH_TOKEN' }),
    };
  }
}
