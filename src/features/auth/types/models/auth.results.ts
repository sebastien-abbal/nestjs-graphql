import { User } from '@features/graphql/users/entities';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthResult {
  @Field(() => User)
  user: User;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
