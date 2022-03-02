import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassUpdateManyWithoutTeachersInput } from '../formation-class/formation-class-update-many-without-teachers.input';
import { CourseUpdateManyWithoutTeacherInput } from '../course/course-update-many-without-teacher.input';

@InputType()
export class TeacherUpdateWithoutUserInput {

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
    formationClasses?: FormationClassUpdateManyWithoutTeachersInput;

    @HideField()
    courses?: CourseUpdateManyWithoutTeacherInput;
}
