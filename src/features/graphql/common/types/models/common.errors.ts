import { Error } from '@features/graphql/common/types/common.interfaces';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  implements: () => [Error],
})
export class TestFailedError implements Error {
  @Field(() => String, { defaultValue: TestFailedError.name })
  code: string;
}

@ObjectType({
  implements: () => [Error],
})
export class NotAuthorizedError implements Error {
  @Field(() => String, { defaultValue: NotAuthorizedError.name })
  code: string;
}
