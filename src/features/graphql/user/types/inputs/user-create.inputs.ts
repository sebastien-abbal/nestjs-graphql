import { UserLocale } from '@features/graphql/user/types';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UserCreateInputs {
  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneIndex?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @Field(() => UserLocale, { nullable: true })
  @IsEnum(UserLocale)
  @IsOptional()
  locale?: UserLocale;
}
