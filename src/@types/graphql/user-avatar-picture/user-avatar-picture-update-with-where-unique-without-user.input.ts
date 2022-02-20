import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';
import { UserAvatarPictureUpdateWithoutUserInput } from './user-avatar-picture-update-without-user.input';

@InputType()
export class UserAvatarPictureUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserAvatarPictureWhereUniqueInput, {nullable:false})
    where!: UserAvatarPictureWhereUniqueInput;

    @Field(() => UserAvatarPictureUpdateWithoutUserInput, {nullable:false})
    data!: UserAvatarPictureUpdateWithoutUserInput;
}
