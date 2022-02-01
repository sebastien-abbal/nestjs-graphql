import { User } from '@features/graphql/users/entities';
import { UsersService } from '@features/graphql/users/users.service';
import { SignInUserModel } from '@features/_auth/auth.models';
import { AuthUserInput } from '@features/_auth/dto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthTokenPayload, AuthTokenType } from '@types';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  private createToken({
    user,
    type,
  }: {
    user: User;
    type: AuthTokenType;
  }): string {
    const payload: AuthTokenPayload = {
      userID: user.id,
      role: user.role,
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

  public authenticateToken({ token }: { token: string }): AuthTokenPayload {
    try {
      const decodedToken = this.jwtService.verify(token);
      return decodedToken;
    } catch (err) {
      return null;
    }
  }

  public async signIn(authUserData: AuthUserInput): Promise<SignInUserModel> {
    const { email, password } = authUserData;

    const user = await this.usersService.getUser({ email });

    if (user) {
      const isPasswordValid = await compare(password, user.password);
      if (isPasswordValid)
        return {
          user,
          accessToken: this.createToken({ user, type: 'ACCESS_TOKEN' }),
          refreshToken: this.createToken({ user, type: 'REFRESH_TOKEN' }),
        };
    }

    return {
      user: null,
      accessToken: null,
      refreshToken: null,
    };
  }
}