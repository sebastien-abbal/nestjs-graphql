import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutStudentInput } from '../user/user-create-nested-one-without-student.input';
import { FormationClassCreateNestedManyWithoutStudentsInput } from '../formation-class/formation-class-create-nested-many-without-students.input';

@InputType()
export class StudentCreateInput {

    @HideField()
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    user!: UserCreateNestedOneWithoutStudentInput;

    @HideField()
    formationClasses?: FormationClassCreateNestedManyWithoutStudentsInput;
}
