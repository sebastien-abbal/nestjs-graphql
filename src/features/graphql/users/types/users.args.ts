import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class UserIDRequiredFilter {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  userID: string;
}

@ArgsType()
export class UserIDFilter {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  userID: string;
}
