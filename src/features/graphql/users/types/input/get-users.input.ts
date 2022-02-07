import { UserRole } from '@features/graphql/users/types';
import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@InputType()
export class GetUsersFiltersInput {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  userIDs?: string[];

  @Field(() => [UserRole], { nullable: true })
  @IsArray()
  @IsOptional()
  userRoles?: UserRole[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;
}
