import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';
import { UserAvatarPictureCreateWithoutUserInput } from './user-avatar-picture-create-without-user.input';

@InputType()
export class UserAvatarPictureCreateOrConnectWithoutUserInput {

    @Field(() => UserAvatarPictureWhereUniqueInput, {nullable:false})
    where!: UserAvatarPictureWhereUniqueInput;

    @Field(() => UserAvatarPictureCreateWithoutUserInput, {nullable:false})
    create!: UserAvatarPictureCreateWithoutUserInput;
}
