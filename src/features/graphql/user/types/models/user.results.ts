import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@types';

@ObjectType()
export class UserSuccess {
  @Field(() => User, { complexity: 3 })
  user: User;
}

@ObjectType()
export class UsersSuccess {
  @Field(() => [User], { complexity: 3 })
  users: User[];
}
