import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class GetUserFiltersInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  userID?: string;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;
}
