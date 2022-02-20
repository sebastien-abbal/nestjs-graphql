import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureCreateWithoutUserInput } from './user-avatar-picture-create-without-user.input';
import { UserAvatarPictureCreateOrConnectWithoutUserInput } from './user-avatar-picture-create-or-connect-without-user.input';
import { UserAvatarPictureCreateManyUserInputEnvelope } from './user-avatar-picture-create-many-user-input-envelope.input';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';

@InputType()
export class UserAvatarPictureUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserAvatarPictureCreateWithoutUserInput], {nullable:true})
    create?: Array<UserAvatarPictureCreateWithoutUserInput>;

    @Field(() => [UserAvatarPictureCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserAvatarPictureCreateOrConnectWithoutUserInput>;

    @Field(() => UserAvatarPictureCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserAvatarPictureCreateManyUserInputEnvelope;

    @Field(() => [UserAvatarPictureWhereUniqueInput], {nullable:true})
    connect?: Array<UserAvatarPictureWhereUniqueInput>;
}
