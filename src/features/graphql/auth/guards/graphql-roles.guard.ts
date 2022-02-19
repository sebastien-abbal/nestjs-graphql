import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User, UserRole } from '../../../../@graphql/generated';
import { AuthUserRole } from '../../../../@types';
import { UserRoleNotRegistered } from '../../../graphql/auth/types';

@Injectable()
export class GraphQLRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(executionContext: ExecutionContext): boolean {
    const roles = this.reflector.get<AuthUserRole[]>(
      'roles',
      executionContext.getHandler(),
    );
    if (!roles) return true;

    const hasRole = (user: User) =>
      user.roles.some((role: UserRole) =>
        Boolean(roles.find((item) => item === role)),
      );

    const request =
      GqlExecutionContext.create(executionContext).getContext().req;

    const user = request?.user;

    if (
      !Object.keys(user).length &&
      roles.includes(UserRoleNotRegistered.ANONYMOUS)
    )
      return true;

    return user && user.roles && hasRole(user);
  }
}
