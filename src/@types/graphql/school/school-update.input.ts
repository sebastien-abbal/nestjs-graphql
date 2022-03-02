import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { SchoolLogoPictureUpdateManyWithoutSchoolInput } from '../school-logo-picture/school-logo-picture-update-many-without-school.input';
import { TrackUpdateManyWithoutSchoolsInput } from '../track/track-update-many-without-schools.input';
import { FormationUpdateManyWithoutSchoolsInput } from '../formation/formation-update-many-without-schools.input';

@InputType()
export class SchoolUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name?: string;

    @Field(() => Boolean, {nullable:true})
    isEnabled?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    @Validator.IsOptional()
    websiteUrl?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    logoPictures?: SchoolLogoPictureUpdateManyWithoutSchoolInput;

    @HideField()
    tracks?: TrackUpdateManyWithoutSchoolsInput;

    @HideField()
    formations?: FormationUpdateManyWithoutSchoolsInput;
}
