import { UserRole } from '@generated/graphql.schema';

export type AuthTokenType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';
export interface IAuthTokenPayload {
  userID: string;
  type: AuthTokenType;
  roles: UserRole[];
  iat?: number;
  exp?: number;
}
