import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { User } from '../../../../@graphql/generated';
import {
  AuthTokenType,
  AuthUserRole,
  IAuthTokenPayload,
} from '../../../../@types';
import { config } from '../../../../config';
import {
  AuthAnonymousSuccess,
  AuthUserInput,
  AuthUserSuccess,
} from '../../../graphql/auth/types';
import { UserService } from '../../../graphql/user/services';

@Injectable()
export class GraphQLAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
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

  public async authUser({
    data,
  }: {
    data: AuthUserInput;
  }): Promise<AuthUserSuccess> {
    const { email, password } = data;

    const targetedUser = await this.userService.getUser({
      where: { email },
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

  public async authAnonymous(): Promise<AuthAnonymousSuccess> {
    return {
      accessToken: this.createToken({ type: 'ACCESS_TOKEN' }),
      refreshToken: this.createToken({ type: 'REFRESH_TOKEN' }),
    };
  }
}
