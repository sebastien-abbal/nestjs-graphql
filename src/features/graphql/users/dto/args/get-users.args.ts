import { UserRole } from '@features/graphql/users/users.enums';
import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class GetUsersArgs {
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
