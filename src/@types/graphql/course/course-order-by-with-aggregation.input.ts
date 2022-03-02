import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { CourseCountOrderByAggregateInput } from './course-count-order-by-aggregate.input';
import { CourseMaxOrderByAggregateInput } from './course-max-order-by-aggregate.input';
import { CourseMinOrderByAggregateInput } from './course-min-order-by-aggregate.input';

@InputType()
export class CourseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    teacherID?: keyof typeof SortOrder;

    @Field(() => CourseCountOrderByAggregateInput, {nullable:true})
    _count?: CourseCountOrderByAggregateInput;

    @Field(() => CourseMaxOrderByAggregateInput, {nullable:true})
    _max?: CourseMaxOrderByAggregateInput;

    @Field(() => CourseMinOrderByAggregateInput, {nullable:true})
    _min?: CourseMinOrderByAggregateInput;
}
