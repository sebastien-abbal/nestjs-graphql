import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureCreateInput } from './user-avatar-picture-create.input';

@ArgsType()
export class CreateOneUserAvatarPictureArgs {

    @Field(() => UserAvatarPictureCreateInput, {nullable:false})
    data!: UserAvatarPictureCreateInput;
}
