import { UserLocale } from '@features/graphql/user/types';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UsersWhereFilters {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  userIDs?: string[];

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Field(() => UserLocale, { nullable: true })
  @IsOptional()
  @IsEnum(UserLocale)
  locale?: UserLocale;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  phoneIndex?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isPhoneVerified?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isEmailVerified?: boolean;
}
