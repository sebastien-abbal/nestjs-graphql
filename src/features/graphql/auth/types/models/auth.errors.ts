import { Field, ObjectType } from '@nestjs/graphql';
import { Error } from '../../../common/types/common.interfaces';

@ObjectType({
  implements: () => [Error],
})
export class WrongCredentialsError implements Error {
  @Field(() => String, {
    defaultValue: WrongCredentialsError.name,
  })
  code: string;
}
