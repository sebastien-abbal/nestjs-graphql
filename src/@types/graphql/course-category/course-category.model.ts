import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Course } from '../course/course.model';
import { HideField } from '@nestjs/graphql';
import { Track } from '../track/track.model';
import { CourseCategoryCount } from '../course/course-category-count.output';

@ObjectType()
export class CourseCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @HideField()
    courses?: Array<Course>;

    @HideField()
    tracks?: Array<Track>;

    @Field(() => CourseCategoryCount, {nullable:false})
    _count?: CourseCategoryCount;
}
