import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CourseVersionCountAggregate } from './course-version-count-aggregate.output';
import { CourseVersionAvgAggregate } from './course-version-avg-aggregate.output';
import { CourseVersionSumAggregate } from './course-version-sum-aggregate.output';
import { CourseVersionMinAggregate } from './course-version-min-aggregate.output';
import { CourseVersionMaxAggregate } from './course-version-max-aggregate.output';

@ObjectType()
export class AggregateCourseVersion {

    @Field(() => CourseVersionCountAggregate, {nullable:true})
    _count?: CourseVersionCountAggregate;

    @Field(() => CourseVersionAvgAggregate, {nullable:true})
    _avg?: CourseVersionAvgAggregate;

    @Field(() => CourseVersionSumAggregate, {nullable:true})
    _sum?: CourseVersionSumAggregate;

    @Field(() => CourseVersionMinAggregate, {nullable:true})
    _min?: CourseVersionMinAggregate;

    @Field(() => CourseVersionMaxAggregate, {nullable:true})
    _max?: CourseVersionMaxAggregate;
}
