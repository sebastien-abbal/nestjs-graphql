import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereInput } from './course-version-support-source-where.input';
import { CourseVersionSupportSourceOrderByWithAggregationInput } from './course-version-support-source-order-by-with-aggregation.input';
import { CourseVersionSupportSourceScalarFieldEnum } from './course-version-support-source-scalar-field.enum';
import { CourseVersionSupportSourceScalarWhereWithAggregatesInput } from './course-version-support-source-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CourseVersionSupportSourceCountAggregateInput } from './course-version-support-source-count-aggregate.input';
import { CourseVersionSupportSourceAvgAggregateInput } from './course-version-support-source-avg-aggregate.input';
import { CourseVersionSupportSourceSumAggregateInput } from './course-version-support-source-sum-aggregate.input';
import { CourseVersionSupportSourceMinAggregateInput } from './course-version-support-source-min-aggregate.input';
import { CourseVersionSupportSourceMaxAggregateInput } from './course-version-support-source-max-aggregate.input';

@ArgsType()
export class CourseVersionSupportSourceGroupByArgs {

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    where?: CourseVersionSupportSourceWhereInput;

    @Field(() => [CourseVersionSupportSourceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CourseVersionSupportSourceOrderByWithAggregationInput>;

    @Field(() => [CourseVersionSupportSourceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CourseVersionSupportSourceScalarFieldEnum>;

    @Field(() => CourseVersionSupportSourceScalarWhereWithAggregatesInput, {nullable:true})
    having?: CourseVersionSupportSourceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CourseVersionSupportSourceCountAggregateInput, {nullable:true})
    _count?: CourseVersionSupportSourceCountAggregateInput;

    @Field(() => CourseVersionSupportSourceAvgAggregateInput, {nullable:true})
    _avg?: CourseVersionSupportSourceAvgAggregateInput;

    @Field(() => CourseVersionSupportSourceSumAggregateInput, {nullable:true})
    _sum?: CourseVersionSupportSourceSumAggregateInput;

    @Field(() => CourseVersionSupportSourceMinAggregateInput, {nullable:true})
    _min?: CourseVersionSupportSourceMinAggregateInput;

    @Field(() => CourseVersionSupportSourceMaxAggregateInput, {nullable:true})
    _max?: CourseVersionSupportSourceMaxAggregateInput;
}
