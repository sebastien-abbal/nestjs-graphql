import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureCreateWithoutUserInput } from './user-avatar-picture-create-without-user.input';
import { UserAvatarPictureCreateOrConnectWithoutUserInput } from './user-avatar-picture-create-or-connect-without-user.input';
import { UserAvatarPictureUpsertWithWhereUniqueWithoutUserInput } from './user-avatar-picture-upsert-with-where-unique-without-user.input';
import { UserAvatarPictureCreateManyUserInputEnvelope } from './user-avatar-picture-create-many-user-input-envelope.input';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';
import { UserAvatarPictureUpdateWithWhereUniqueWithoutUserInput } from './user-avatar-picture-update-with-where-unique-without-user.input';
import { UserAvatarPictureUpdateManyWithWhereWithoutUserInput } from './user-avatar-picture-update-many-with-where-without-user.input';
import { UserAvatarPictureScalarWhereInput } from './user-avatar-picture-scalar-where.input';

@InputType()
export class UserAvatarPictureUpdateManyWithoutUserInput {

    @Field(() => [UserAvatarPictureCreateWithoutUserInput], {nullable:true})
    create?: Array<UserAvatarPictureCreateWithoutUserInput>;

    @Field(() => [UserAvatarPictureCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserAvatarPictureCreateOrConnectWithoutUserInput>;

    @Field(() => [UserAvatarPictureUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UserAvatarPictureUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserAvatarPictureCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserAvatarPictureCreateManyUserInputEnvelope;

    @Field(() => [UserAvatarPictureWhereUniqueInput], {nullable:true})
    set?: Array<UserAvatarPictureWhereUniqueInput>;

    @Field(() => [UserAvatarPictureWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserAvatarPictureWhereUniqueInput>;

    @Field(() => [UserAvatarPictureWhereUniqueInput], {nullable:true})
    delete?: Array<UserAvatarPictureWhereUniqueInput>;

    @Field(() => [UserAvatarPictureWhereUniqueInput], {nullable:true})
    connect?: Array<UserAvatarPictureWhereUniqueInput>;

    @Field(() => [UserAvatarPictureUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UserAvatarPictureUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserAvatarPictureUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UserAvatarPictureUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserAvatarPictureScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserAvatarPictureScalarWhereInput>;
}
