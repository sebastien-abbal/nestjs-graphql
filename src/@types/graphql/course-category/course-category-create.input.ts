import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CourseCreateNestedManyWithoutCategoriesInput } from '../course/course-create-nested-many-without-categories.input';
import { TrackCreateNestedManyWithoutCategoriesInput } from '../track/track-create-nested-many-without-categories.input';

@InputType()
export class CourseCategoryCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    courses?: CourseCreateNestedManyWithoutCategoriesInput;

    @HideField()
    tracks?: TrackCreateNestedManyWithoutCategoriesInput;
}
