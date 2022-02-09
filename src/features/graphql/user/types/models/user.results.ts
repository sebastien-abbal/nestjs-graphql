import { User } from '@features/graphql/user/entities';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResult {
  @Field(() => User, { complexity: 3 })
  user: User;
}

@ObjectType()
export class UsersResult {
  @Field(() => [User], { complexity: 3 })
  users: User[];
}
