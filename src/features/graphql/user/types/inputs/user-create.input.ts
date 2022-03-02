import { Field, InputType } from '@nestjs/graphql';
import { UserCreateManyInput } from '@types';
import { IsOptional } from 'class-validator';

@InputType()
export class UserCreateOneInput extends UserCreateManyInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  _avatarPictureID?: string;
}
