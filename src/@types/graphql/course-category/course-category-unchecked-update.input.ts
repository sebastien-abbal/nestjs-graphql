import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CourseUncheckedUpdateManyWithoutCategoriesInput } from '../course/course-unchecked-update-many-without-categories.input';
import { TrackUncheckedUpdateManyWithoutCategoriesInput } from '../track/track-unchecked-update-many-without-categories.input';

@InputType()
export class CourseCategoryUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
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
    courses?: CourseUncheckedUpdateManyWithoutCategoriesInput;

    @HideField()
    tracks?: TrackUncheckedUpdateManyWithoutCategoriesInput;
}
