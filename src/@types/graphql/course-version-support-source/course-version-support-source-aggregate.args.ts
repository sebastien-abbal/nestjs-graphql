import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereInput } from './course-version-support-source-where.input';
import { CourseVersionSupportSourceOrderByWithRelationInput } from './course-version-support-source-order-by-with-relation.input';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseVersionSupportSourceCountAggregateInput } from './course-version-support-source-count-aggregate.input';
import { CourseVersionSupportSourceAvgAggregateInput } from './course-version-support-source-avg-aggregate.input';
import { CourseVersionSupportSourceSumAggregateInput } from './course-version-support-source-sum-aggregate.input';
import { CourseVersionSupportSourceMinAggregateInput } from './course-version-support-source-min-aggregate.input';
import { CourseVersionSupportSourceMaxAggregateInput } from './course-version-support-source-max-aggregate.input';

@ArgsType()
export class CourseVersionSupportSourceAggregateArgs {

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    where?: CourseVersionSupportSourceWhereInput;

    @Field(() => [CourseVersionSupportSourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CourseVersionSupportSourceOrderByWithRelationInput>;

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:true})
    cursor?: CourseVersionSupportSourceWhereUniqueInput;

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
