import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CourseUncheckedUpdateManyWithoutTeacherInput } from '../course/course-unchecked-update-many-without-teacher.input';

@InputType()
export class TeacherUncheckedUpdateWithoutFormationClassesInput {

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
    userID?: string;

    @HideField()
    courses?: CourseUncheckedUpdateManyWithoutTeacherInput;
}
