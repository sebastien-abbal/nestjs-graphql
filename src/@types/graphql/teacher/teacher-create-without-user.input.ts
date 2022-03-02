import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassCreateNestedManyWithoutTeachersInput } from '../formation-class/formation-class-create-nested-many-without-teachers.input';
import { CourseCreateNestedManyWithoutTeacherInput } from '../course/course-create-nested-many-without-teacher.input';

@InputType()
export class TeacherCreateWithoutUserInput {

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
    formationClasses?: FormationClassCreateNestedManyWithoutTeachersInput;

    @HideField()
    courses?: CourseCreateNestedManyWithoutTeacherInput;
}
