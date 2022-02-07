import { Error } from '@features/graphql/common/types/common.interfaces';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  implements: () => [Error],
})
export class WrongCredentialsError implements Error {
  @Field(() => String, {
    defaultValue: WrongCredentialsError.name,
  })
  code: string;
}
