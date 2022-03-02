import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UserAvatarPictureCountOrderByAggregateInput } from './user-avatar-picture-count-order-by-aggregate.input';
import { UserAvatarPictureAvgOrderByAggregateInput } from './user-avatar-picture-avg-order-by-aggregate.input';
import { UserAvatarPictureMaxOrderByAggregateInput } from './user-avatar-picture-max-order-by-aggregate.input';
import { UserAvatarPictureMinOrderByAggregateInput } from './user-avatar-picture-min-order-by-aggregate.input';
import { UserAvatarPictureSumOrderByAggregateInput } from './user-avatar-picture-sum-order-by-aggregate.input';

@InputType()
export class UserAvatarPictureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    provider?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @HideField()
    size?: keyof typeof SortOrder;

    @HideField()
    width?: keyof typeof SortOrder;

    @HideField()
    height?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    fileToDeleteAt?: keyof typeof SortOrder;

    @HideField()
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
