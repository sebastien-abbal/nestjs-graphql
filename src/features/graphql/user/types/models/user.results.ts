import { User } from '@graphql';
import { Field, ObjectType } from '@nestjs/graphql';
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
