import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateManyMutationInput } from '@types';
import { IsOptional } from 'class-validator';

@InputType()
export class UserUpdateOneInput extends UserUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  _avatarPictureID?: string;
}
