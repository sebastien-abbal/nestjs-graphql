import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { SchoolLogoPictureUncheckedCreateNestedManyWithoutSchoolInput } from '../school-logo-picture/school-logo-picture-unchecked-create-nested-many-without-school.input';
import { FormationUncheckedCreateNestedManyWithoutSchoolsInput } from '../formation/formation-unchecked-create-nested-many-without-schools.input';

@InputType()
export class SchoolUncheckedCreateWithoutTracksInput {

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
    logoPictures?: SchoolLogoPictureUncheckedCreateNestedManyWithoutSchoolInput;

    @HideField()
    formations?: FormationUncheckedCreateNestedManyWithoutSchoolsInput;
}
