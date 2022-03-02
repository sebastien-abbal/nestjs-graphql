import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTeacherInput } from '../user/user-create-nested-one-without-teacher.input';
import { FormationClassCreateNestedManyWithoutTeachersInput } from '../formation-class/formation-class-create-nested-many-without-teachers.input';
import { CourseCreateNestedManyWithoutTeacherInput } from '../course/course-create-nested-many-without-teacher.input';

@InputType()
export class TeacherCreateInput {

    @HideField()
    id?: string;

    @HideField()
    isConfirmed?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    user!: UserCreateNestedOneWithoutTeacherInput;

    @HideField()
    formationClasses?: FormationClassCreateNestedManyWithoutTeachersInput;

    @HideField()
    courses?: CourseCreateNestedManyWithoutTeacherInput;
}
