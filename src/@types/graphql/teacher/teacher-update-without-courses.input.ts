import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutTeacherInput } from '../user/user-update-one-required-without-teacher.input';
import { FormationClassUpdateManyWithoutTeachersInput } from '../formation-class/formation-class-update-many-without-teachers.input';

@InputType()
export class TeacherUpdateWithoutCoursesInput {

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
    user?: UserUpdateOneRequiredWithoutTeacherInput;

    @HideField()
    formationClasses?: FormationClassUpdateManyWithoutTeachersInput;
}
