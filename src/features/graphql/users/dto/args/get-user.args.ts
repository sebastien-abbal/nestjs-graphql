import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  userID?: string;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;
}
