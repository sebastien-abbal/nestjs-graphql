import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';
import { UserAvatarPictureUpdateWithoutUserInput } from './user-avatar-picture-update-without-user.input';
import { UserAvatarPictureCreateWithoutUserInput } from './user-avatar-picture-create-without-user.input';

@InputType()
export class UserAvatarPictureUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserAvatarPictureWhereUniqueInput, {nullable:false})
    where!: UserAvatarPictureWhereUniqueInput;

    @Field(() => UserAvatarPictureUpdateWithoutUserInput, {nullable:false})
    update!: UserAvatarPictureUpdateWithoutUserInput;

    @Field(() => UserAvatarPictureCreateWithoutUserInput, {nullable:false})
    create!: UserAvatarPictureCreateWithoutUserInput;
}
