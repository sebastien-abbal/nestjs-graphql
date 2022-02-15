import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAvatarPicturesInput } from './user-create-without-avatar-pictures.input';

@InputType()
export class UserCreateOrConnectWithoutAvatarPicturesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAvatarPicturesInput, {nullable:false})
    create!: UserCreateWithoutAvatarPicturesInput;
}
