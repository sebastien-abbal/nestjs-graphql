import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CourseUpdateManyWithoutCategoriesInput } from '../course/course-update-many-without-categories.input';
import { TrackUpdateManyWithoutCategoriesInput } from '../track/track-update-many-without-categories.input';

@InputType()
export class CourseCategoryUpdateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    courses?: CourseUpdateManyWithoutCategoriesInput;

    @HideField()
    tracks?: TrackUpdateManyWithoutCategoriesInput;
}
