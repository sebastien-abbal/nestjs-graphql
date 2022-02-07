import { User } from '@features/graphql/users/entities';
import { UserRole } from '@features/graphql/users/types';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GraphQLRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(executionContext: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRole[]>(
      'roles',
      executionContext.getHandler(),
    );
    if (!roles) return true;

    const hasRole = (user: User) =>
      user.roles.some(
        (role: UserRole) => !!roles.find((item) => item === role),
      );

    const request =
      GqlExecutionContext.create(executionContext).getContext().req;

    const user = request?.user;
    // return user && user.roles && hasRole(user);
    return true;
  }
}
