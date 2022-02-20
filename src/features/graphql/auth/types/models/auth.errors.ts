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

@ObjectType({
  implements: () => [Error],
})
export class WrongAuthTokenFormatError implements Error {
  @Field(() => String, {
    defaultValue: WrongAuthTokenFormatError.name,
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
