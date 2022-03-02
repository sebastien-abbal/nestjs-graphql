import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCountAggregate } from './course-version-support-source-count-aggregate.output';
import { CourseVersionSupportSourceAvgAggregate } from './course-version-support-source-avg-aggregate.output';
import { CourseVersionSupportSourceSumAggregate } from './course-version-support-source-sum-aggregate.output';
import { CourseVersionSupportSourceMinAggregate } from './course-version-support-source-min-aggregate.output';
import { CourseVersionSupportSourceMaxAggregate } from './course-version-support-source-max-aggregate.output';

@ObjectType()
export class AggregateCourseVersionSupportSource {

    @Field(() => CourseVersionSupportSourceCountAggregate, {nullable:true})
    _count?: CourseVersionSupportSourceCountAggregate;

    @Field(() => CourseVersionSupportSourceAvgAggregate, {nullable:true})
    _avg?: CourseVersionSupportSourceAvgAggregate;

    @Field(() => CourseVersionSupportSourceSumAggregate, {nullable:true})
    _sum?: CourseVersionSupportSourceSumAggregate;

    @Field(() => CourseVersionSupportSourceMinAggregate, {nullable:true})
    _min?: CourseVersionSupportSourceMinAggregate;

    @Field(() => CourseVersionSupportSourceMaxAggregate, {nullable:true})
    _max?: CourseVersionSupportSourceMaxAggregate;
}
