import { UserService } from '@features/graphql/user/services';
import { UserRoleNotRegistered } from '@features/graphql/user/types';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { IAuthTokenPayload } from '@types';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class GraphQLJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
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
    if (roles && roles.includes(UserRoleNotRegistered.ANONYMOUS)) return {};
    if (!userID) return null;

    const user = await this.userService.getUser({ where: { userID } });

    return user;
  }
}
