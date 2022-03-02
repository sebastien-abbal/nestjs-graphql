import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { CourseCategoryCountOrderByAggregateInput } from './course-category-count-order-by-aggregate.input';
import { CourseCategoryMaxOrderByAggregateInput } from './course-category-max-order-by-aggregate.input';
import { CourseCategoryMinOrderByAggregateInput } from './course-category-min-order-by-aggregate.input';

@InputType()
export class CourseCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @Field(() => CourseCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: CourseCategoryCountOrderByAggregateInput;

    @Field(() => CourseCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: CourseCategoryMaxOrderByAggregateInput;

    @Field(() => CourseCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: CourseCategoryMinOrderByAggregateInput;
}
