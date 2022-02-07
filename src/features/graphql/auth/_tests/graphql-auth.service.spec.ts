import { jwtConfig } from '@config';
import { DatabaseModule } from '@features/database/database.module';
import { AuthModule } from '@features/graphql/auth/auth.module';
import { AuthService } from '@features/graphql/auth/auth.service';
import { GraphQLJwtStrategy } from '@features/graphql/auth/strategies';
import { User } from '@features/graphql/users/entities';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';

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
      providers: [
        ...usersProviders,
        UsersService,
        AuthService,
        GraphQLJwtStrategy,
      ],
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
