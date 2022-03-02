import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { CourseCategoryUncheckedUpdateManyWithoutCoursesInput } from '../course-category/course-category-unchecked-update-many-without-courses.input';

@InputType()
export class CourseUncheckedUpdateWithoutVersionsInput {

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
    teacherID?: string;

    @HideField()
    categories?: CourseCategoryUncheckedUpdateManyWithoutCoursesInput;
}
