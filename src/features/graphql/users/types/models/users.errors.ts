import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserNotFoundError {
  @Field(() => String, { defaultValue: UserNotFoundError.name })
  code: string;
}

@ObjectType()
export class UserEmailAlreadyTakenError {
  @Field(() => String, { defaultValue: UserEmailAlreadyTakenError.name })
  code: string;
}
