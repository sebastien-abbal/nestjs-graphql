import { Field, ObjectType } from '@nestjs/graphql';
import { Error } from '../../../common/types/common.interfaces';

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
export class UserAlreadyExistsError implements Error {
  @Field(() => String, {
    defaultValue: UserAlreadyExistsError.name,
  })
  code: string;
}
