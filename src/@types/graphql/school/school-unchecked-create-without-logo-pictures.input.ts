import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { TrackUncheckedCreateNestedManyWithoutSchoolsInput } from '../track/track-unchecked-create-nested-many-without-schools.input';
import { FormationUncheckedCreateNestedManyWithoutSchoolsInput } from '../formation/formation-unchecked-create-nested-many-without-schools.input';

@InputType()
export class SchoolUncheckedCreateWithoutLogoPicturesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name!: string;

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
    tracks?: TrackUncheckedCreateNestedManyWithoutSchoolsInput;

    @HideField()
    formations?: FormationUncheckedCreateNestedManyWithoutSchoolsInput;
}
