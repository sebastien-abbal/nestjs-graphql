import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureCreateManyInput } from './user-avatar-picture-create-many.input';

@ArgsType()
export class CreateManyUserAvatarPictureArgs {

    @Field(() => [UserAvatarPictureCreateManyInput], {nullable:false})
    data!: Array<UserAvatarPictureCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
