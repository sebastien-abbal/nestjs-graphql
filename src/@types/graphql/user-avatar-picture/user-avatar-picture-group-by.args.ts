import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAvatarPictureWhereInput } from './user-avatar-picture-where.input';
import { UserAvatarPictureOrderByWithAggregationInput } from './user-avatar-picture-order-by-with-aggregation.input';
import { UserAvatarPictureScalarFieldEnum } from './user-avatar-picture-scalar-field.enum';
import { UserAvatarPictureScalarWhereWithAggregatesInput } from './user-avatar-picture-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserAvatarPictureCountAggregateInput } from './user-avatar-picture-count-aggregate.input';
import { UserAvatarPictureAvgAggregateInput } from './user-avatar-picture-avg-aggregate.input';
import { UserAvatarPictureSumAggregateInput } from './user-avatar-picture-sum-aggregate.input';
import { UserAvatarPictureMinAggregateInput } from './user-avatar-picture-min-aggregate.input';
import { UserAvatarPictureMaxAggregateInput } from './user-avatar-picture-max-aggregate.input';

@ArgsType()
export class UserAvatarPictureGroupByArgs {

    @Field(() => UserAvatarPictureWhereInput, {nullable:true})
    where?: UserAvatarPictureWhereInput;

    @Field(() => [UserAvatarPictureOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserAvatarPictureOrderByWithAggregationInput>;

    @Field(() => [UserAvatarPictureScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserAvatarPictureScalarFieldEnum>;

    @Field(() => UserAvatarPictureScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserAvatarPictureScalarWhereWithAggregatesInput;

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
