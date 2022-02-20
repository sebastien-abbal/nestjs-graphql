import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvatarPicturesInput } from './user-create-without-avatar-pictures.input';
import { UserCreateOrConnectWithoutAvatarPicturesInput } from './user-create-or-connect-without-avatar-pictures.input';
import { UserUpsertWithoutAvatarPicturesInput } from './user-upsert-without-avatar-pictures.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAvatarPicturesInput } from './user-update-without-avatar-pictures.input';

@InputType()
export class UserUpdateOneRequiredWithoutAvatarPicturesInput {

    @Field(() => UserCreateWithoutAvatarPicturesInput, {nullable:true})
    create?: UserCreateWithoutAvatarPicturesInput;

    @Field(() => UserCreateOrConnectWithoutAvatarPicturesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAvatarPicturesInput;

    @Field(() => UserUpsertWithoutAvatarPicturesInput, {nullable:true})
    upsert?: UserUpsertWithoutAvatarPicturesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAvatarPicturesInput, {nullable:true})
    update?: UserUpdateWithoutAvatarPicturesInput;
}
