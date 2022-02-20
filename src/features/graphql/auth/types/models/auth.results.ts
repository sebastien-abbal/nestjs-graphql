import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../../../../@graphql/generated';

@ObjectType()
export class AuthUserSuccess {
  @Field(() => User, { complexity: 3 })
  user: User;

  @Field(() => String, { complexity: 3 })
  accessToken: string;

  @Field(() => String, { complexity: 3 })
  refreshToken: string;
}

@ObjectType()
export class AuthAnonymousSuccess {
  @Field(() => String, { complexity: 3 })
  accessToken: string;

  @Field(() => String, { complexity: 3 })
  refreshToken: string;
}

@ObjectType()
export class AuthRefreshSuccess {
  @Field(() => User, { nullable: true, complexity: 3 })
  user?: User;

  @Field(() => String, { complexity: 3 })
  accessToken: string;

  @Field(() => String, { complexity: 3 })
  refreshToken: string;
}
