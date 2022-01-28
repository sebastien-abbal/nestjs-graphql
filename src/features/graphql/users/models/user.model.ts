import { Field, ObjectType } from '@nestjs/graphql';
import { UserRole } from '@types';

@ObjectType()
export class UserModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => String)
  phoneIndex?: string;

  @Field(() => String)
  phoneNumber?: string;

  @Field(() => Boolean)
  isPhoneVerified: boolean;

  @Field(() => Boolean)
  isEmailVerified: boolean;

  @Field(() => Date)
  lastLoginAt: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt?: Date;

  @Field(() => Date)
  deletedAt?: Date;
}
