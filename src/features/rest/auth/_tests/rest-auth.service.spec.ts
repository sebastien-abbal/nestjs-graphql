import { config } from '@config';
import { DatabaseModule } from '@features/database/database.module';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
import { RestJwtStrategy } from '@features/rest/auth/strategies';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { RestAuthModule } from '../auth.module';

describe('Auth module (Services)', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        RestAuthModule,
        DatabaseModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: config.auth.jwtSecret,
        }),
      ],
      providers: [...usersProviders, UsersService, RestJwtStrategy],
    }).compile();

    usersService = app.get<UsersService>(UsersService);
  });

  it('should return true', () => {
    expect(true).toBe(true);
  });
});
