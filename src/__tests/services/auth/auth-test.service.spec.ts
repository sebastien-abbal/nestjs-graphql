import { config } from '@config';
import { MOCKED_USERS } from '@features/graphql/user/_mocks/user.service.mock';
import { generateAuthTokenForTest } from '@tests/services/auth/auth-test.service';
import { verify } from 'jsonwebtoken';

describe('Services for Test (Auth test)', () => {
  const user = MOCKED_USERS[1];

  it('should return a valid auth token', () => {
    const authToken = generateAuthTokenForTest({
      userID: user.id,
      type: 'ACCESS_TOKEN',
    });

    expect(typeof authToken).toBe('string');

    const decodedToken = verify(authToken, config.auth.jwtPublicKey);
    expect(decodedToken).toMatchObject({
      userID: user.id,
      type: 'ACCESS_TOKEN',
      roles: user.roles,
      iat: expect.any(Number),
      exp: expect.any(Number),
    });
  });

  it('should return a valid refresh token', () => {
    const refreshToken = generateAuthTokenForTest({
      userID: user.id,
      type: 'REFRESH_TOKEN',
    });

    expect(typeof refreshToken).toBe('string');

    const decodedToken = verify(refreshToken, config.auth.jwtPublicKey);
    expect(decodedToken).toMatchObject({
      userID: user.id,
      type: 'REFRESH_TOKEN',
      roles: user.roles,
      iat: expect.any(Number),
      exp: expect.any(Number),
    });
  });
});
