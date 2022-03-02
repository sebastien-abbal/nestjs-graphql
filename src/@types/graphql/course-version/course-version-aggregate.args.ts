import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionWhereInput } from './course-version-where.input';
import { CourseVersionOrderByWithRelationInput } from './course-version-order-by-with-relation.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseVersionCountAggregateInput } from './course-version-count-aggregate.input';
import { CourseVersionAvgAggregateInput } from './course-version-avg-aggregate.input';
import { CourseVersionSumAggregateInput } from './course-version-sum-aggregate.input';
import { CourseVersionMinAggregateInput } from './course-version-min-aggregate.input';
import { CourseVersionMaxAggregateInput } from './course-version-max-aggregate.input';

@ArgsType()
export class CourseVersionAggregateArgs {

    @Field(() => CourseVersionWhereInput, {nullable:true})
    where?: CourseVersionWhereInput;

    @Field(() => [CourseVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CourseVersionOrderByWithRelationInput>;

    @Field(() => CourseVersionWhereUniqueInput, {nullable:true})
    cursor?: CourseVersionWhereUniqueInput;

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
