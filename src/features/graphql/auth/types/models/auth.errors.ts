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

@ObjectType({
  implements: () => [Error],
})
export class UserBannedError implements Error {
  @Field(() => String, {
    defaultValue: UserBannedError.name,
  })
  code: string;
}

@ObjectType({
  implements: () => [Error],
})
export class UserDeletedError implements Error {
  @Field(() => String, {
    defaultValue: UserDeletedError.name,
  })
  code: string;
}
