import { User } from '@features/graphql/users/entities';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResult {
  @Field(() => User)
  user: User;
}

@ObjectType()
export class UserResults {
  @Field(() => [User])
  users: User[];
}
