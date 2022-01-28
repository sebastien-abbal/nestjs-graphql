import { UserRole } from '@features/graphql/users/users.enums';
import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('UserRole', () => UserRole)
export class UserRoleScalar implements CustomScalar<string, UserRole> {
  description = 'User role scalar for user model.';

  parseValue(value: string): UserRole {
    return UserRole[value]; // value from the client
  }

  serialize(value: UserRole): string {
    return value;
  }

  parseLiteral(ast: ValueNode): UserRole {
    if (ast.kind === Kind.STRING && ast?.value in UserRole) {
      return UserRole[ast.value];
    }
    return null;
  }
}
