import { User } from '@features/graphql/users/entities';
import { UsersService } from '@features/graphql/users/users.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthTokenType, IAuthTokenPayload } from '@types';

@Injectable()
export class RestAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  public createToken({
    user,
    type,
  }: {
    user: User;
    type: AuthTokenType;
  }): string {
    const payload: IAuthTokenPayload = {
      userID: user.id,
      roles: user.roles,
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
}
