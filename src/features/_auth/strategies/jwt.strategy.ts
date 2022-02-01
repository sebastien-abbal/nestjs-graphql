import { UsersService } from '@features/graphql/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { AuthTokenPayload } from '@types';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';

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

  async validate(payload: AuthTokenPayload, done: VerifiedCallback) {
    const { userID } = payload;
    if (!userID) return done(new UnauthorizedException(), false);

    const user = await this.usersService.getUser({ userID });
    if (!user) return done(new UnauthorizedException(), false);

    return done(null, { id: user.id }, payload.iat);
  }
}
