import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureUpdateInput } from './user-avatar-picture-update.input';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';

@ArgsType()
export class UpdateOneUserAvatarPictureArgs {

    @Field(() => UserAvatarPictureUpdateInput, {nullable:false})
    data!: UserAvatarPictureUpdateInput;

    @Field(() => UserAvatarPictureWhereUniqueInput, {nullable:false})
    where!: UserAvatarPictureWhereUniqueInput;
}
