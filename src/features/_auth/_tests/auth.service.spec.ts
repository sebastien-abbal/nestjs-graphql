import { jwtConfig } from '@config';
import { User } from '@features/graphql/users/entities';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
import { AuthService } from '@features/_auth/auth.service';
import { JwtStrategy } from '@features/_auth/strategies';
import { DatabaseModule } from '@features/_database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from '../auth.module';

describe('Auth module (Services)', () => {
  let usersService: UsersService;
  let authService: AuthService;
  let user: User;
  let authToken: string;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        DatabaseModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: jwtConfig().jwtSecret,
        }),
      ],
      providers: [...usersProviders, UsersService, AuthService, JwtStrategy],
    }).compile();

    usersService = app.get<UsersService>(UsersService);
    authService = app.get<AuthService>(AuthService);

    user = await usersService.getUser({ userID: 'xxx-xxx-xxx' });
    authToken = authService.createToken({
      user,
      type: 'ACCESS_TOKEN',
    });
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should return encoded jwt token', () => {
    expect(authToken).toMatch(/(^[\w-]*\.[\w-]*\.[\w-]*$)/g);
  });

  it('should return decoded auth token with user, type and iat', () => {
    expect(authService.authenticateToken({ token: authToken })).toEqual(
      expect.objectContaining({
        userID: expect.any(String),
        role: expect.any(String),
        type: expect.any(String),
        iat: expect.any(Number),
        exp: expect.any(Number),
      }),
    );
  });
});
