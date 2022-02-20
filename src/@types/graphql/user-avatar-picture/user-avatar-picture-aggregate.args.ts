import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureWhereInput } from './user-avatar-picture-where.input';
import { UserAvatarPictureOrderByWithRelationInput } from './user-avatar-picture-order-by-with-relation.input';
import { UserAvatarPictureWhereUniqueInput } from './user-avatar-picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAvatarPictureCountAggregateInput } from './user-avatar-picture-count-aggregate.input';
import { UserAvatarPictureAvgAggregateInput } from './user-avatar-picture-avg-aggregate.input';
import { UserAvatarPictureSumAggregateInput } from './user-avatar-picture-sum-aggregate.input';
import { UserAvatarPictureMinAggregateInput } from './user-avatar-picture-min-aggregate.input';
import { UserAvatarPictureMaxAggregateInput } from './user-avatar-picture-max-aggregate.input';

@ArgsType()
export class UserAvatarPictureAggregateArgs {

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

    @Field(() => UserAvatarPictureCountAggregateInput, {nullable:true})
    _count?: UserAvatarPictureCountAggregateInput;

    @Field(() => UserAvatarPictureAvgAggregateInput, {nullable:true})
    _avg?: UserAvatarPictureAvgAggregateInput;

    @Field(() => UserAvatarPictureSumAggregateInput, {nullable:true})
    _sum?: UserAvatarPictureSumAggregateInput;

    @Field(() => UserAvatarPictureMinAggregateInput, {nullable:true})
    _min?: UserAvatarPictureMinAggregateInput;

    @Field(() => UserAvatarPictureMaxAggregateInput, {nullable:true})
    _max?: UserAvatarPictureMaxAggregateInput;
}
