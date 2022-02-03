import { UserRole } from '@features/graphql/users/users.enums';
import {
  GraphQLAuthGuard,
  RestAuthGuard,
  RolesGuard,
} from '@features/_auth/guards';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

export const GraphQLAuth = (...roles: UserRole[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GraphQLAuthGuard, RolesGuard),
  );
};

export const RestAuth = (...roles: UserRole[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(RestAuthGuard, RolesGuard),
  );
};
