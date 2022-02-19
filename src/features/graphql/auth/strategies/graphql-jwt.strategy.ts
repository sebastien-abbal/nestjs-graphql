import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuthTokenPayload } from '../../../../@types';
import { config } from '../../../../config';
import { UserRoleNotRegistered } from '../../../graphql/auth/types';
import { UserService } from '../../../graphql/user/services';

@Injectable()
export class GraphQLJwtStrategy extends PassportStrategy(Strategy) {
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

    return user;
  }
}
