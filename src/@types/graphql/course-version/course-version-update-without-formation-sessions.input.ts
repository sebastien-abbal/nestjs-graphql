import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { UserUpdateOneRequiredWithoutCoursesInput } from '../user/user-update-one-required-without-courses.input';
import { HideField } from '@nestjs/graphql';
import { CourseUpdateOneRequiredWithoutVersionsInput } from '../course/course-update-one-required-without-versions.input';
import { CourseVersionSupportSourceUpdateManyWithoutCourseInput } from '../course-version-support-source/course-version-support-source-update-many-without-course.input';

@InputType()
export class CourseVersionUpdateWithoutFormationSessionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    versionNumber?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(5000)
    description?: string;

    @Field(() => SessionFormat, {nullable:true})
    format?: keyof typeof SessionFormat;

    @HideField()
    validatedBy?: UserUpdateOneRequiredWithoutCoursesInput;

    @HideField()
    validatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    duration?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    course?: CourseUpdateOneRequiredWithoutVersionsInput;

    @HideField()
    supports?: CourseVersionSupportSourceUpdateManyWithoutCourseInput;
}
