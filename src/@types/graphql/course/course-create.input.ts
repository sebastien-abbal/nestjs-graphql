import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { TeacherCreateNestedOneWithoutCoursesInput } from '../teacher/teacher-create-nested-one-without-courses.input';
import { CourseVersionCreateNestedManyWithoutCourseInput } from '../course-version/course-version-create-nested-many-without-course.input';
import { CourseCategoryCreateNestedManyWithoutCoursesInput } from '../course-category/course-category-create-nested-many-without-courses.input';

@InputType()
export class CourseCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(100)
    title!: string;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    teacher!: TeacherCreateNestedOneWithoutCoursesInput;

    @HideField()
    versions?: CourseVersionCreateNestedManyWithoutCourseInput;

    @HideField()
    categories?: CourseCategoryCreateNestedManyWithoutCoursesInput;
}
