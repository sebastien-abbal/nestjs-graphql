import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { SchoolCreateNestedManyWithoutTracksInput } from '../school/school-create-nested-many-without-tracks.input';
import { CourseCategoryCreateNestedManyWithoutTracksInput } from '../course-category/course-category-create-nested-many-without-tracks.input';

@InputType()
export class TrackCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name!: string;

    @Field(() => Boolean, {nullable:true})
    isEnabled?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    schools?: SchoolCreateNestedManyWithoutTracksInput;

    @HideField()
    categories?: CourseCategoryCreateNestedManyWithoutTracksInput;
}
