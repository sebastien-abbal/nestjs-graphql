import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureWhereInput } from './user-avatar-picture-where.input';
import { UserAvatarPictureOrderByWithRelationInput } from './user-avatar-picture-order-by-with-relation.input';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAvatarPictureScalarFieldEnum } from './user-avatar-picture-scalar-field.enum';

@ArgsType()
export class FindManyUserAvatarPictureArgs {

    @Field(() => UserAvatarPictureWhereInput, {nullable:true})
    where?: UserAvatarPictureWhereInput;

    @Field(() => [UserAvatarPictureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserAvatarPictureOrderByWithRelationInput>;

    @Field(() => UserAvatarPictureWhereUniqueInput, {nullable:true})
    cursor?: UserAvatarPictureWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserAvatarPictureScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserAvatarPictureScalarFieldEnum>;
}
