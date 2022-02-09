import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeletionSuccess {
  @Field(() => Boolean)
  isDeleted: boolean;
}

@ObjectType()
export class TestSuccess {
  @Field(() => String)
  status: string;
}
