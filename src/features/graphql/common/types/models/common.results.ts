import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeletionResult {
  @Field(() => Boolean)
  isDeleted: boolean;
}

@ObjectType()
export class HealthResult {
  @Field(() => String)
  status: string;
}
