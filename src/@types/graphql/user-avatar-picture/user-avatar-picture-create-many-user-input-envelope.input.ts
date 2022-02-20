import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureCreateManyUserInput } from './user-avatar-picture-create-many-user.input';

@InputType()
export class UserAvatarPictureCreateManyUserInputEnvelope {

    @Field(() => [UserAvatarPictureCreateManyUserInput], {nullable:false})
    data!: Array<UserAvatarPictureCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
