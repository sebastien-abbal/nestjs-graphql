import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';

@ArgsType()
export class DeleteOneUserAvatarPictureArgs {

    @Field(() => UserAvatarPictureWhereUniqueInput, {nullable:false})
    where!: UserAvatarPictureWhereUniqueInput;
}
