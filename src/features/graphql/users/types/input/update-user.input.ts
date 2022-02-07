import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Field(() => String, { nullable: true, complexity: 2 })
  @IsOptional()
  @IsString()
  password?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneIndex?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneNumber?: string;
}
