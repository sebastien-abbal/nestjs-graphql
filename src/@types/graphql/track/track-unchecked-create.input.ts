import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { SchoolUncheckedCreateNestedManyWithoutTracksInput } from '../school/school-unchecked-create-nested-many-without-tracks.input';
import { CourseCategoryUncheckedCreateNestedManyWithoutTracksInput } from '../course-category/course-category-unchecked-create-nested-many-without-tracks.input';

@InputType()
export class TrackUncheckedCreateInput {

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
    schools?: SchoolUncheckedCreateNestedManyWithoutTracksInput;

    @HideField()
    categories?: CourseCategoryUncheckedCreateNestedManyWithoutTracksInput;
}
