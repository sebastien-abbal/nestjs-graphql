import { User } from '@features/graphql/users/entities';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthUserResult {
  @Field(() => User, { complexity: 3 })
  user: User;

  @Field(() => String, { complexity: 3 })
  accessToken: string;

  @Field(() => String, { complexity: 3 })
  refreshToken: string;
}

@ObjectType()
export class AuthAnonymousResult {
  @Field(() => String, { complexity: 3 })
  accessToken: string;

  @Field(() => String, { complexity: 3 })
  refreshToken: string;
}
