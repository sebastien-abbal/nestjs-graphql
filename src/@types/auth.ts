import { UserRole } from '@features/graphql/users/types';

export type AuthTokenType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';
export interface IAuthTokenPayload {
  userID: string;
  type: AuthTokenType;
  roles: UserRole[];
  iat?: number;
  exp?: number;
}
