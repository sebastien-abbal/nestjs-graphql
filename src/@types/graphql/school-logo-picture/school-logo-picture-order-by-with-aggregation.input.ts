import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolLogoPictureCountOrderByAggregateInput } from './school-logo-picture-count-order-by-aggregate.input';
import { SchoolLogoPictureAvgOrderByAggregateInput } from './school-logo-picture-avg-order-by-aggregate.input';
import { SchoolLogoPictureMaxOrderByAggregateInput } from './school-logo-picture-max-order-by-aggregate.input';
import { SchoolLogoPictureMinOrderByAggregateInput } from './school-logo-picture-min-order-by-aggregate.input';
import { SchoolLogoPictureSumOrderByAggregateInput } from './school-logo-picture-sum-order-by-aggregate.input';

@InputType()
export class SchoolLogoPictureOrderByWithAggregationInput {

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
    schoolID?: keyof typeof SortOrder;

    @Field(() => SchoolLogoPictureCountOrderByAggregateInput, {nullable:true})
    _count?: SchoolLogoPictureCountOrderByAggregateInput;

    @Field(() => SchoolLogoPictureAvgOrderByAggregateInput, {nullable:true})
    _avg?: SchoolLogoPictureAvgOrderByAggregateInput;

    @Field(() => SchoolLogoPictureMaxOrderByAggregateInput, {nullable:true})
    _max?: SchoolLogoPictureMaxOrderByAggregateInput;

    @Field(() => SchoolLogoPictureMinOrderByAggregateInput, {nullable:true})
    _min?: SchoolLogoPictureMinOrderByAggregateInput;

    @Field(() => SchoolLogoPictureSumOrderByAggregateInput, {nullable:true})
    _sum?: SchoolLogoPictureSumOrderByAggregateInput;
}
