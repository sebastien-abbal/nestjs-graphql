import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureScalarWhereInput } from './user-avatar-picture-scalar-where.input';
import { UserAvatarPictureUpdateManyMutationInput } from './user-avatar-picture-update-many-mutation.input';

@InputType()
export class UserAvatarPictureUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserAvatarPictureScalarWhereInput, {nullable:false})
    where!: UserAvatarPictureScalarWhereInput;

    @Field(() => UserAvatarPictureUpdateManyMutationInput, {nullable:false})
    data!: UserAvatarPictureUpdateManyMutationInput;
}
