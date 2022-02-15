import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureUpdateManyMutationInput } from './user-avatar-picture-update-many-mutation.input';
import { UserAvatarPictureWhereInput } from './user-avatar-picture-where.input';

@ArgsType()
export class UpdateManyUserAvatarPictureArgs {

    @Field(() => UserAvatarPictureUpdateManyMutationInput, {nullable:false})
    data!: UserAvatarPictureUpdateManyMutationInput;

    @Field(() => UserAvatarPictureWhereInput, {nullable:true})
    where?: UserAvatarPictureWhereInput;
}
