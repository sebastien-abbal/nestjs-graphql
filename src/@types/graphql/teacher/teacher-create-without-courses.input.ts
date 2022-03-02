import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTeacherInput } from '../user/user-create-nested-one-without-teacher.input';
import { FormationClassCreateNestedManyWithoutTeachersInput } from '../formation-class/formation-class-create-nested-many-without-teachers.input';

@InputType()
export class TeacherCreateWithoutCoursesInput {

    @Field(() => String, {nullable:true})
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
}
