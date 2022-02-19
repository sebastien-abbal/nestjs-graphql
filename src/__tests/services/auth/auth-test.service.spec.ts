import { verify } from 'jsonwebtoken';
import { config } from '../../../config';
import { USERS } from '../../../features/database/data/seed';
import { generateAuthTokenForTest } from './auth-test.service';

describe('Services for Test (Auth test)', () => {
  const user = USERS[1];

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
