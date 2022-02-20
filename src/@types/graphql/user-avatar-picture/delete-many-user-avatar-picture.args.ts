import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureWhereInput } from './user-avatar-picture-where.input';

@ArgsType()
export class DeleteManyUserAvatarPictureArgs {

    @Field(() => UserAvatarPictureWhereInput, {nullable:true})
    where?: UserAvatarPictureWhereInput;
}
