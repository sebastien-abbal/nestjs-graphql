import { UsersService } from '@features/graphql/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { IAuthTokenPayload } from '@types';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get<string>('jwtSecret'),
    });
  }

  async validate(payload: IAuthTokenPayload) {
    const { userID } = payload;
    if (!userID) throw new UnauthorizedException();

    const user = await this.usersService.getUser({ userID });
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
