import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { CourseVersionUncheckedUpdateManyWithoutCourseInput } from '../course-version/course-version-unchecked-update-many-without-course.input';
import { CourseCategoryUncheckedUpdateManyWithoutCoursesInput } from '../course-category/course-category-unchecked-update-many-without-courses.input';

@InputType()
export class CourseUncheckedUpdateWithoutTeacherInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(100)
    title?: string;

    @Field(() => SessionFormat, {nullable:true})
    format?: keyof typeof SessionFormat;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    versions?: CourseVersionUncheckedUpdateManyWithoutCourseInput;

    @HideField()
    categories?: CourseCategoryUncheckedUpdateManyWithoutCoursesInput;
}
