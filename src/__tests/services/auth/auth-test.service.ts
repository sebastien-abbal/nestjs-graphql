import { config } from '@config';
import { USERS } from '@features/database/data/seed';
import { AuthTokenType, AuthUserRole, IAuthTokenPayload } from '@types';
import { sign } from 'jsonwebtoken';

export const generateAuthTokenForTest = ({
  userID,
  type,
  roles,
}: {
  userID: string;
  type: AuthTokenType;
  roles?: AuthUserRole[];
}) => {
  const user = USERS.find((user) => user.id === userID);
  const payload: IAuthTokenPayload = {
    userID: user ? user.id : userID,
    roles: roles ? roles : (user.roles as AuthUserRole[]),
    type,
  };

  return sign(payload, config.auth.jwtPrivateKey, {
    algorithm: 'RS256',
    expiresIn:
      type === 'ACCESS_TOKEN'
        ? config.auth.jwtAccessTokenExpirationTimeInSeconds
        : config.auth.jwtRefreshTokenExpirationTimeInSeconds,
  });
};
