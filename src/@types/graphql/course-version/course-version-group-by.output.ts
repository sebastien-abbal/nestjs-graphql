import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { CourseVersionCountAggregate } from './course-version-count-aggregate.output';
import { CourseVersionAvgAggregate } from './course-version-avg-aggregate.output';
import { CourseVersionSumAggregate } from './course-version-sum-aggregate.output';
import { CourseVersionMinAggregate } from './course-version-min-aggregate.output';
import { CourseVersionMaxAggregate } from './course-version-max-aggregate.output';

@ObjectType()
export class CourseVersionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    versionNumber!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @Field(() => String, {nullable:false})
    validatedByID!: string;

    @Field(() => Date, {nullable:true})
    validatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    duration!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    courseID!: string;

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
