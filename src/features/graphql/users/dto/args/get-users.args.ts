import { UserRole } from '@features/graphql/users/users.enums';
import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class GetUsersArgs {
  @Field(() => [String])
  @IsArray()
  @IsOptional()
  userIDs: string[];

  @Field(() => [UserRole])
  @IsArray()
  @IsOptional()
  userRoles: UserRole[];

  @Field(() => String)
  @IsString()
  @IsOptional()
  firstName: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  lastName: string;
}
