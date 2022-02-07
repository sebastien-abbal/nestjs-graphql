import { UserRole, UserRoleNotRegistered } from '@features/graphql/users/types';

export type AuthTokenType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';

export type AuthUserRole = UserRole | UserRoleNotRegistered;
export interface IAuthTokenPayload {
  userID?: string;
  type: AuthTokenType;
  roles: AuthUserRole[];
  iat?: number;
  exp?: number;
}
