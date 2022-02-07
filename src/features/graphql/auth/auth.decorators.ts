import {
  GraphQLAuthGuard,
  GraphQLRolesGuard,
} from '@features/graphql/auth/guards';
import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthUserRole } from '@types';

export const GraphQLAuth = (...roles: AuthUserRole[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GraphQLAuthGuard, GraphQLRolesGuard),
  );
};

export const GraphQLCurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req?.user;
  },
);
