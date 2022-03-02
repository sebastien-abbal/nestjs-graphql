import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';
import { HideField } from '@nestjs/graphql';
import { FormationSessionCreateNestedManyWithoutCourseInput } from '../formation-session/formation-session-create-nested-many-without-course.input';
import { CourseVersionSupportSourceCreateNestedManyWithoutCourseInput } from '../course-version-support-source/course-version-support-source-create-nested-many-without-course.input';

@InputType()
export class CourseVersionCreateWithoutCourseInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    versionNumber?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(5000)
    description!: string;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @HideField()
    validatedBy!: UserCreateNestedOneWithoutCoursesInput;

    @HideField()
    validatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    duration!: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formationSessions?: FormationSessionCreateNestedManyWithoutCourseInput;

    @HideField()
    supports?: CourseVersionSupportSourceCreateNestedManyWithoutCourseInput;
}
