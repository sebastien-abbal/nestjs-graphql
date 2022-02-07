import { RestAuthGuard, RestRolesGuard } from '@features/rest/auth/guards';
import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AuthUserRole } from '@types';

export const RestAuth = (...roles: AuthUserRole[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(RestAuthGuard, RestRolesGuard),
  );
};

export const RestCurrentUser = createParamDecorator(
  (data: unknown, executionContext: ExecutionContext) => {
    const req = executionContext.switchToHttp().getRequest();
    return req?.user;
  },
);
