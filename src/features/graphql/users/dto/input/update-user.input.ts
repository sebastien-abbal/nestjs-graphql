import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  userID: string;

  @Field(() => String)
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field(() => String)
  @IsOptional()
  @IsNotEmpty()
  firstName?: string;

  @Field(() => String)
  @IsOptional()
  @IsNotEmpty()
  lastName?: string;

  @Field(() => String)
  @IsOptional()
  @IsNotEmpty()
  password?: string;
}
