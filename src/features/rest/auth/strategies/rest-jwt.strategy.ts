import { UserRoleNotRegistered } from '@features/graphql/users/types';
import { UsersService } from '@features/graphql/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { IAuthTokenPayload } from '@types';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class RestJwtStrategy extends PassportStrategy(Strategy) {
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
    const { userID, roles } = payload;
    if (roles && roles.includes(UserRoleNotRegistered.ANONYMOUS)) return null;
    if (!userID) throw new UnauthorizedException();

    const user = await this.usersService.getUser({ filters: { userID } });
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
