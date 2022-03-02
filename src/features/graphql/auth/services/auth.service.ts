import { config } from '@config';
import {
  AuthAnonymousSuccess,
  AuthUserInput,
  AuthUserSuccess,
} from '@features/graphql/auth/types';
import { UserService } from '@features/graphql/user/services';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, AuthTokenType, AuthUserRole, IAuthTokenPayload } from '@types';
import { compareSync } from 'bcryptjs';

@Injectable()
export class GraphQLAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  private createToken({
    type,
    user,
  }: {
    type: AuthTokenType;
    user?: User;
  }): string {
    const payload: IAuthTokenPayload = {
      userID: user ? user.id : null,
      roles: user ? (user.roles as AuthUserRole[]) : null,
      type,
    };
    return this.jwtService.sign(payload, {
      algorithm: 'RS256',
      privateKey: config.auth.jwtPrivateKey,
      expiresIn:
        type === 'ACCESS_TOKEN'
          ? config.auth.jwtAccessTokenExpirationTimeInSeconds
          : config.auth.jwtRefreshTokenExpirationTimeInSeconds,
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

  public authUser({
    data,
    targetedUser,
  }: {
    data: AuthUserInput;
    targetedUser: User;
  }): AuthUserSuccess {
    const { password } = data;

    if (targetedUser) {
      const isPasswordValid = compareSync(password, targetedUser.password);
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

  public authAnonymous(): AuthAnonymousSuccess {
    return {
      accessToken: this.createToken({ type: 'ACCESS_TOKEN' }),
      refreshToken: this.createToken({ type: 'REFRESH_TOKEN' }),
    };
  }

  public authRefresh({
    targetedUser,
  }: {
    targetedUser?: User;
  }): AuthUserSuccess {
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
}
