import { UserRole } from '@features/graphql/users/users.enums';

export type AuthTokenType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';
export interface AuthTokenPayload {
  userID: string;
  type: AuthTokenType;
  role: UserRole;
  iat?: number;
  exp?: number;
}
