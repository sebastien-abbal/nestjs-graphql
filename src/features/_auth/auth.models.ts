import { User } from '@features/graphql/users/entities';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignInUserModel {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;
}
