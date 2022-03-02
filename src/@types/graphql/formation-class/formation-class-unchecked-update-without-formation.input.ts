import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { StudentUncheckedUpdateManyWithoutFormationClassesInput } from '../student/student-unchecked-update-many-without-formation-classes.input';
import { TeacherUncheckedUpdateManyWithoutFormationClassesInput } from '../teacher/teacher-unchecked-update-many-without-formation-classes.input';

@InputType()
export class FormationClassUncheckedUpdateWithoutFormationInput {

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
    students?: StudentUncheckedUpdateManyWithoutFormationClassesInput;

    @HideField()
    teachers?: TeacherUncheckedUpdateManyWithoutFormationClassesInput;
}
