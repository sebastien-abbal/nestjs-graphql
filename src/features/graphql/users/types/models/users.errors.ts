import { Error } from '@features/graphql/common/types/common.interfaces';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  implements: () => [Error],
})
export class UserNotFoundError implements Error {
  @Field(() => String, { defaultValue: UserNotFoundError.name })
  code: string;
}

@ObjectType({
  implements: () => [Error],
})
export class UserEmailAlreadyTakenError implements Error {
  @Field(() => String, {
    defaultValue: UserEmailAlreadyTakenError.name,
  })
  code: string;
}
