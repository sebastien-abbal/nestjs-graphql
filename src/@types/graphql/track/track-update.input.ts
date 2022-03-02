import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { SchoolUpdateManyWithoutTracksInput } from '../school/school-update-many-without-tracks.input';
import { CourseCategoryUpdateManyWithoutTracksInput } from '../course-category/course-category-update-many-without-tracks.input';

@InputType()
export class TrackUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name?: string;

    @Field(() => Boolean, {nullable:true})
    isEnabled?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    schools?: SchoolUpdateManyWithoutTracksInput;

    @HideField()
    categories?: CourseCategoryUpdateManyWithoutTracksInput;
}
