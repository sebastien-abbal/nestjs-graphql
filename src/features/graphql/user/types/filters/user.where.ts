import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UserWhereFilters {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  userID?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  email?: string;
}
