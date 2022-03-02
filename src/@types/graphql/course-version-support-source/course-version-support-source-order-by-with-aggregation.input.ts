import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { CourseVersionSupportSourceCountOrderByAggregateInput } from './course-version-support-source-count-order-by-aggregate.input';
import { CourseVersionSupportSourceAvgOrderByAggregateInput } from './course-version-support-source-avg-order-by-aggregate.input';
import { CourseVersionSupportSourceMaxOrderByAggregateInput } from './course-version-support-source-max-order-by-aggregate.input';
import { CourseVersionSupportSourceMinOrderByAggregateInput } from './course-version-support-source-min-order-by-aggregate.input';
import { CourseVersionSupportSourceSumOrderByAggregateInput } from './course-version-support-source-sum-order-by-aggregate.input';

@InputType()
export class CourseVersionSupportSourceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    provider?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

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

    @HideField()
    courseID?: keyof typeof SortOrder;

    @Field(() => CourseVersionSupportSourceCountOrderByAggregateInput, {nullable:true})
    _count?: CourseVersionSupportSourceCountOrderByAggregateInput;

    @Field(() => CourseVersionSupportSourceAvgOrderByAggregateInput, {nullable:true})
    _avg?: CourseVersionSupportSourceAvgOrderByAggregateInput;

    @Field(() => CourseVersionSupportSourceMaxOrderByAggregateInput, {nullable:true})
    _max?: CourseVersionSupportSourceMaxOrderByAggregateInput;

    @Field(() => CourseVersionSupportSourceMinOrderByAggregateInput, {nullable:true})
    _min?: CourseVersionSupportSourceMinOrderByAggregateInput;

    @Field(() => CourseVersionSupportSourceSumOrderByAggregateInput, {nullable:true})
    _sum?: CourseVersionSupportSourceSumOrderByAggregateInput;
}
