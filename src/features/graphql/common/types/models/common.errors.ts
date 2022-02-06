import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HealthFailedError {
  @Field(() => String, { defaultValue: HealthFailedError.name })
  code: string;
}

@ObjectType()
export class NotAuthorizedError {
  @Field(() => String, { defaultValue: NotAuthorizedError.name })
  code: string;
}
