import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { FormationUpdateOneRequiredWithoutClassesInput } from '../formation/formation-update-one-required-without-classes.input';
import { TeacherUpdateManyWithoutFormationClassesInput } from '../teacher/teacher-update-many-without-formation-classes.input';

@InputType()
export class FormationClassUpdateWithoutStudentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name?: string;

    @HideField()
    isEnabled?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formation?: FormationUpdateOneRequiredWithoutClassesInput;

    @HideField()
    teachers?: TeacherUpdateManyWithoutFormationClassesInput;
}
