import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutTeacherInput } from '../user/user-update-one-required-without-teacher.input';
import { CourseUpdateManyWithoutTeacherInput } from '../course/course-update-many-without-teacher.input';

@InputType()
export class TeacherUpdateWithoutFormationClassesInput {

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
    courses?: CourseUpdateManyWithoutTeacherInput;
}
