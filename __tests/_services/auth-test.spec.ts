import { config } from '@config';
import { USERS } from '@features/database/data';
import { UserRoleNotRegistered } from '@features/graphql/auth/types';
import {
  generateAnonymousAuthTokenForTest,
  generateUserAuthTokenForTest,
} from '@tests/_services/auth-test';
import { verify } from 'jsonwebtoken';

describe('Services for Test (Auth test)', () => {
  const CURRENT_USER = USERS[0];

  describe('generateAnonymousAuthTokenForTest function', () => {
    it('should return a valid auth token', () => {
      const authToken = generateAnonymousAuthTokenForTest({
        type: 'ACCESS_TOKEN',
      });

      expect(typeof authToken).toBe('string');

      const decodedToken = verify(authToken, config.auth.jwtPublicKey);
      expect(decodedToken).toMatchObject({
        userID: null,
        type: 'ACCESS_TOKEN',
        roles: [UserRoleNotRegistered.ANONYMOUS],
        iat: expect.any(Number),
        exp: expect.any(Number),
      });
    });

    it('should return a valid refresh token', () => {
      const refreshToken = generateAnonymousAuthTokenForTest({
        type: 'REFRESH_TOKEN',
      });

      expect(typeof refreshToken).toBe('string');

      const decodedToken = verify(refreshToken, config.auth.jwtPublicKey);
      expect(decodedToken).toMatchObject({
        userID: null,
        type: 'REFRESH_TOKEN',
        roles: [UserRoleNotRegistered.ANONYMOUS],
        iat: expect.any(Number),
        exp: expect.any(Number),
      });
    });
  });

  describe('generateUserAuthTokenForTest function', () => {
    it('should return a valid auth token', () => {
      const authToken = generateUserAuthTokenForTest({
        userID: CURRENT_USER.id,
        type: 'ACCESS_TOKEN',
      });

      expect(typeof authToken).toBe('string');

      const decodedToken = verify(authToken, config.auth.jwtPublicKey);
      expect(decodedToken).toMatchObject({
        userID: CURRENT_USER.id,
        type: 'ACCESS_TOKEN',
        roles: CURRENT_USER.roles,
        iat: expect.any(Number),
        exp: expect.any(Number),
      });
    });

    it('should return a valid refresh token', () => {
      const refreshToken = generateUserAuthTokenForTest({
        userID: CURRENT_USER.id,
        type: 'REFRESH_TOKEN',
      });

      expect(typeof refreshToken).toBe('string');

      const decodedToken = verify(refreshToken, config.auth.jwtPublicKey);
      expect(decodedToken).toMatchObject({
        userID: CURRENT_USER.id,
        type: 'REFRESH_TOKEN',
        roles: CURRENT_USER.roles,
        iat: expect.any(Number),
        exp: expect.any(Number),
      });
    });
  });
});
