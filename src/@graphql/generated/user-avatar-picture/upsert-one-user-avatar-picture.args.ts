import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';
import { UserAvatarPictureCreateInput } from './user-avatar-picture-create.input';
import { UserAvatarPictureUpdateInput } from './user-avatar-picture-update.input';

@ArgsType()
export class UpsertOneUserAvatarPictureArgs {

    @Field(() => UserAvatarPictureWhereUniqueInput, {nullable:false})
    where!: UserAvatarPictureWhereUniqueInput;

    @Field(() => UserAvatarPictureCreateInput, {nullable:false})
    create!: UserAvatarPictureCreateInput;

    @Field(() => UserAvatarPictureUpdateInput, {nullable:false})
    update!: UserAvatarPictureUpdateInput;
}
