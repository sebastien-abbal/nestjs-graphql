import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { CourseVersionSupportSourceUncheckedUpdateManyWithoutCourseInput } from '../course-version-support-source/course-version-support-source-unchecked-update-many-without-course.input';

@InputType()
export class CourseVersionUncheckedUpdateWithoutFormationSessionsInput {

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
    validatedByID?: string;

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
    courseID?: string;

    @HideField()
    supports?: CourseVersionSupportSourceUncheckedUpdateManyWithoutCourseInput;
}
