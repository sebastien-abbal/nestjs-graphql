import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { CourseVersionCountOrderByAggregateInput } from './course-version-count-order-by-aggregate.input';
import { CourseVersionAvgOrderByAggregateInput } from './course-version-avg-order-by-aggregate.input';
import { CourseVersionMaxOrderByAggregateInput } from './course-version-max-order-by-aggregate.input';
import { CourseVersionMinOrderByAggregateInput } from './course-version-min-order-by-aggregate.input';
import { CourseVersionSumOrderByAggregateInput } from './course-version-sum-order-by-aggregate.input';

@InputType()
export class CourseVersionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    versionNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @HideField()
    validatedByID?: keyof typeof SortOrder;

    @HideField()
    validatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    courseID?: keyof typeof SortOrder;

    @Field(() => CourseVersionCountOrderByAggregateInput, {nullable:true})
    _count?: CourseVersionCountOrderByAggregateInput;

    @Field(() => CourseVersionAvgOrderByAggregateInput, {nullable:true})
    _avg?: CourseVersionAvgOrderByAggregateInput;

    @Field(() => CourseVersionMaxOrderByAggregateInput, {nullable:true})
    _max?: CourseVersionMaxOrderByAggregateInput;

    @Field(() => CourseVersionMinOrderByAggregateInput, {nullable:true})
    _min?: CourseVersionMinOrderByAggregateInput;

    @Field(() => CourseVersionSumOrderByAggregateInput, {nullable:true})
    _sum?: CourseVersionSumOrderByAggregateInput;
}
