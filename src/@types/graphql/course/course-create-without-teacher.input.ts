import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { CourseVersionCreateNestedManyWithoutCourseInput } from '../course-version/course-version-create-nested-many-without-course.input';
import { CourseCategoryCreateNestedManyWithoutCoursesInput } from '../course-category/course-category-create-nested-many-without-courses.input';

@InputType()
export class CourseCreateWithoutTeacherInput {

    @Field(() => String, {nullable:true})
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
    versions?: CourseVersionCreateNestedManyWithoutCourseInput;

    @HideField()
    categories?: CourseCategoryCreateNestedManyWithoutCoursesInput;
}
