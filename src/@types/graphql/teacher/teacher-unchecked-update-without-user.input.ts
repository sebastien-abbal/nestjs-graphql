import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassUncheckedUpdateManyWithoutTeachersInput } from '../formation-class/formation-class-unchecked-update-many-without-teachers.input';
import { CourseUncheckedUpdateManyWithoutTeacherInput } from '../course/course-unchecked-update-many-without-teacher.input';

@InputType()
export class TeacherUncheckedUpdateWithoutUserInput {

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
    formationClasses?: FormationClassUncheckedUpdateManyWithoutTeachersInput;

    @HideField()
    courses?: CourseUncheckedUpdateManyWithoutTeacherInput;
}
