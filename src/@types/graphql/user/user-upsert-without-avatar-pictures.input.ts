import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAvatarPicturesInput } from './user-update-without-avatar-pictures.input';
import { UserCreateWithoutAvatarPicturesInput } from './user-create-without-avatar-pictures.input';

@InputType()
export class UserUpsertWithoutAvatarPicturesInput {

    @Field(() => UserUpdateWithoutAvatarPicturesInput, {nullable:false})
    update!: UserUpdateWithoutAvatarPicturesInput;

    @Field(() => UserCreateWithoutAvatarPicturesInput, {nullable:false})
    create!: UserCreateWithoutAvatarPicturesInput;
}
