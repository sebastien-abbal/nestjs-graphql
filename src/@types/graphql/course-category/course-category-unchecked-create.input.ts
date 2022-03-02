import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CourseUncheckedCreateNestedManyWithoutCategoriesInput } from '../course/course-unchecked-create-nested-many-without-categories.input';
import { TrackUncheckedCreateNestedManyWithoutCategoriesInput } from '../track/track-unchecked-create-nested-many-without-categories.input';

@InputType()
export class CourseCategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
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
    courses?: CourseUncheckedCreateNestedManyWithoutCategoriesInput;

    @HideField()
    tracks?: TrackUncheckedCreateNestedManyWithoutCategoriesInput;
}
