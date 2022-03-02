import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { TeacherUpdateOneRequiredWithoutCoursesInput } from '../teacher/teacher-update-one-required-without-courses.input';
import { CourseVersionUpdateManyWithoutCourseInput } from '../course-version/course-version-update-many-without-course.input';
import { CourseCategoryUpdateManyWithoutCoursesInput } from '../course-category/course-category-update-many-without-courses.input';

@InputType()
export class CourseUpdateInput {

    @HideField()
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
    teacher?: TeacherUpdateOneRequiredWithoutCoursesInput;

    @HideField()
    versions?: CourseVersionUpdateManyWithoutCourseInput;

    @HideField()
    categories?: CourseCategoryUpdateManyWithoutCoursesInput;
}
