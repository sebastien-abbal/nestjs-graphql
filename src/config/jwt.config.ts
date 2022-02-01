import * as envVar from 'env-var';

export const jwtConfig = () => ({
  jwtSecret: envVar.get('JWT_SECRET').required().asString(),
  jwtAccessTokenExpirationTimeInSeconds: envVar
    .get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')
    .default(60 * 60 * 24)
    .asInt(),
  jwtRefreshTokenExpirationTimeInSeconds: envVar
    .get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')
    .default(60 * 60 * 24 * 30)
    .asInt(),
  encryptionKey: envVar.get('ENCRYPTION_KEY').required().asString(),
});
