import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { StudentUpdateManyWithoutFormationClassesInput } from '../student/student-update-many-without-formation-classes.input';
import { TeacherUpdateManyWithoutFormationClassesInput } from '../teacher/teacher-update-many-without-formation-classes.input';

@InputType()
export class FormationClassUpdateWithoutFormationInput {

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
    students?: StudentUpdateManyWithoutFormationClassesInput;

    @HideField()
    teachers?: TeacherUpdateManyWithoutFormationClassesInput;
}
