import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { TrackUncheckedUpdateManyWithoutSchoolsInput } from '../track/track-unchecked-update-many-without-schools.input';
import { FormationUncheckedUpdateManyWithoutSchoolsInput } from '../formation/formation-unchecked-update-many-without-schools.input';

@InputType()
export class SchoolUncheckedUpdateWithoutLogoPicturesInput {

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
    tracks?: TrackUncheckedUpdateManyWithoutSchoolsInput;

    @HideField()
    formations?: FormationUncheckedUpdateManyWithoutSchoolsInput;
}
