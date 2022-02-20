import { config } from '@config';
import { UserRoleNotRegistered } from '@features/graphql/auth/types';
import { UserService } from '@features/graphql/user/services';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IAuthTokenPayload } from '@types';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class RestJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.auth.jwtPublicKey,
    });
  }

  async validate(payload: IAuthTokenPayload) {
    const { userID, roles } = payload;
    if (roles && roles.includes(UserRoleNotRegistered.ANONYMOUS)) return {};
    if (!userID) return null;

    const user = await this.userService.getUser({ where: { id: userID } });
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
