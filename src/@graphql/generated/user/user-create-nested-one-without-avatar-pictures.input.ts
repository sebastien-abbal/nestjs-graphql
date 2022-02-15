import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvatarPicturesInput } from './user-create-without-avatar-pictures.input';
import { UserCreateOrConnectWithoutAvatarPicturesInput } from './user-create-or-connect-without-avatar-pictures.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAvatarPicturesInput {

    @Field(() => UserCreateWithoutAvatarPicturesInput, {nullable:true})
    create?: UserCreateWithoutAvatarPicturesInput;

    @Field(() => UserCreateOrConnectWithoutAvatarPicturesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAvatarPicturesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
