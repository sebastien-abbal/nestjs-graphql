import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserAvatarPictureCountOrderByAggregateInput } from './user-avatar-picture-count-order-by-aggregate.input';
import { UserAvatarPictureAvgOrderByAggregateInput } from './user-avatar-picture-avg-order-by-aggregate.input';
import { UserAvatarPictureMaxOrderByAggregateInput } from './user-avatar-picture-max-order-by-aggregate.input';
import { UserAvatarPictureMinOrderByAggregateInput } from './user-avatar-picture-min-order-by-aggregate.input';
import { UserAvatarPictureSumOrderByAggregateInput } from './user-avatar-picture-sum-order-by-aggregate.input';

@InputType()
export class UserAvatarPictureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileToDeleteAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userID?: keyof typeof SortOrder;

    @Field(() => UserAvatarPictureCountOrderByAggregateInput, {nullable:true})
    _count?: UserAvatarPictureCountOrderByAggregateInput;

    @Field(() => UserAvatarPictureAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserAvatarPictureAvgOrderByAggregateInput;

    @Field(() => UserAvatarPictureMaxOrderByAggregateInput, {nullable:true})
    _max?: UserAvatarPictureMaxOrderByAggregateInput;

    @Field(() => UserAvatarPictureMinOrderByAggregateInput, {nullable:true})
    _min?: UserAvatarPictureMinOrderByAggregateInput;

    @Field(() => UserAvatarPictureSumOrderByAggregateInput, {nullable:true})
    _sum?: UserAvatarPictureSumOrderByAggregateInput;
}
