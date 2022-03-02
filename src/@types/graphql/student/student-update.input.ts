import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutStudentInput } from '../user/user-update-one-required-without-student.input';
import { FormationClassUpdateManyWithoutStudentsInput } from '../formation-class/formation-class-update-many-without-students.input';

@InputType()
export class StudentUpdateInput {

    @HideField()
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    user?: UserUpdateOneRequiredWithoutStudentInput;

    @HideField()
    formationClasses?: FormationClassUpdateManyWithoutStudentsInput;
}
