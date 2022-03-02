import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolCountOrderByAggregateInput } from './school-count-order-by-aggregate.input';
import { SchoolMaxOrderByAggregateInput } from './school-max-order-by-aggregate.input';
import { SchoolMinOrderByAggregateInput } from './school-min-order-by-aggregate.input';

@InputType()
export class SchoolOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isEnabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    websiteUrl?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SchoolCountOrderByAggregateInput, {nullable:true})
    _count?: SchoolCountOrderByAggregateInput;

    @Field(() => SchoolMaxOrderByAggregateInput, {nullable:true})
    _max?: SchoolMaxOrderByAggregateInput;

    @Field(() => SchoolMinOrderByAggregateInput, {nullable:true})
    _min?: SchoolMinOrderByAggregateInput;
}
