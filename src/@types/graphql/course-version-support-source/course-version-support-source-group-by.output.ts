import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { CourseSupportSourceType } from '../prisma/course-support-source-type.enum';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CourseVersionSupportSourceCountAggregate } from './course-version-support-source-count-aggregate.output';
import { CourseVersionSupportSourceAvgAggregate } from './course-version-support-source-avg-aggregate.output';
import { CourseVersionSupportSourceSumAggregate } from './course-version-support-source-sum-aggregate.output';
import { CourseVersionSupportSourceMinAggregate } from './course-version-support-source-min-aggregate.output';
import { CourseVersionSupportSourceMaxAggregate } from './course-version-support-source-max-aggregate.output';

@ObjectType()
export class CourseVersionSupportSourceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => MediaProvider, {nullable:true})
    provider?: keyof typeof MediaProvider;

    @Field(() => MediaStatus, {nullable:false})
    status!: keyof typeof MediaStatus;

    @Field(() => CourseSupportSourceType, {nullable:false})
    type!: keyof typeof CourseSupportSourceType;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    fileToDeleteAt?: Date | string;

    @HideField()
    userID!: string;

    @HideField()
    courseID!: string;

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
