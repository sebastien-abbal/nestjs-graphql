import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { CourseSupportSourceType } from '../prisma/course-support-source-type.enum';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class CourseVersionSupportSourceMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MediaProvider, {nullable:true})
    provider?: keyof typeof MediaProvider;

    @Field(() => MediaStatus, {nullable:true})
    status?: keyof typeof MediaStatus;

    @Field(() => CourseSupportSourceType, {nullable:true})
    type?: keyof typeof CourseSupportSourceType;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    fileToDeleteAt?: Date | string;

    @HideField()
    userID?: string;

    @HideField()
    courseID?: string;
}
