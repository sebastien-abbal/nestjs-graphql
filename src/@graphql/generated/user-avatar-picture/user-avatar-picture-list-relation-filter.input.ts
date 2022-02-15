import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAvatarPictureWhereInput } from './user-avatar-picture-where.input';

@InputType()
export class UserAvatarPictureListRelationFilter {

    @Field(() => UserAvatarPictureWhereInput, {nullable:true})
    every?: UserAvatarPictureWhereInput;

    @Field(() => UserAvatarPictureWhereInput, {nullable:true})
    some?: UserAvatarPictureWhereInput;

    @Field(() => UserAvatarPictureWhereInput, {nullable:true})
    none?: UserAvatarPictureWhereInput;
}
