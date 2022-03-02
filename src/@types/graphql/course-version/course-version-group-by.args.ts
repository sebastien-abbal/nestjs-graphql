import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionWhereInput } from './course-version-where.input';
import { CourseVersionOrderByWithAggregationInput } from './course-version-order-by-with-aggregation.input';
import { CourseVersionScalarFieldEnum } from './course-version-scalar-field.enum';
import { CourseVersionScalarWhereWithAggregatesInput } from './course-version-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CourseVersionCountAggregateInput } from './course-version-count-aggregate.input';
import { CourseVersionAvgAggregateInput } from './course-version-avg-aggregate.input';
import { CourseVersionSumAggregateInput } from './course-version-sum-aggregate.input';
import { CourseVersionMinAggregateInput } from './course-version-min-aggregate.input';
import { CourseVersionMaxAggregateInput } from './course-version-max-aggregate.input';

@ArgsType()
export class CourseVersionGroupByArgs {

    @Field(() => CourseVersionWhereInput, {nullable:true})
    where?: CourseVersionWhereInput;

    @Field(() => [CourseVersionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CourseVersionOrderByWithAggregationInput>;

    @Field(() => [CourseVersionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CourseVersionScalarFieldEnum>;

    @Field(() => CourseVersionScalarWhereWithAggregatesInput, {nullable:true})
    having?: CourseVersionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CourseVersionCountAggregateInput, {nullable:true})
    _count?: CourseVersionCountAggregateInput;

    @Field(() => CourseVersionAvgAggregateInput, {nullable:true})
    _avg?: CourseVersionAvgAggregateInput;

    @Field(() => CourseVersionSumAggregateInput, {nullable:true})
    _sum?: CourseVersionSumAggregateInput;

    @Field(() => CourseVersionMinAggregateInput, {nullable:true})
    _min?: CourseVersionMinAggregateInput;

    @Field(() => CourseVersionMaxAggregateInput, {nullable:true})
    _max?: CourseVersionMaxAggregateInput;
}
