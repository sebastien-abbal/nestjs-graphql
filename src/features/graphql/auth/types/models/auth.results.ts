import { User } from '@features/graphql/users/entities';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthResult {
  @Field(() => User, { complexity: 3 })
  user: User;

  @Field(() => String, { complexity: 3 })
  accessToken: string;

  @Field(() => String, { complexity: 3 })
  refreshToken: string;
}
