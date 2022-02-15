import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleNotRegistered {
  ANONYMOUS = 'ANONYMOUS',
}
registerEnumType(UserRoleNotRegistered, { name: 'UserRoleNotRegistered' });
