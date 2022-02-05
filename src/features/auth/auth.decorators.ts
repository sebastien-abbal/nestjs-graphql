import {
  GraphQLAuthGuard,
  RestAuthGuard,
  RolesGuard,
} from '@features/auth/guards';
import { UserRole } from '@generated/graphql.schema';
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
