import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WrongCredentialsError {
  @Field(() => String, { defaultValue: WrongCredentialsError.name })
  code: string;
}
