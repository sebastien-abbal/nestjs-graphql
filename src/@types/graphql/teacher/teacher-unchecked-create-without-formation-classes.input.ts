import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CourseUncheckedCreateNestedManyWithoutTeacherInput } from '../course/course-unchecked-create-nested-many-without-teacher.input';

@InputType()
export class TeacherUncheckedCreateWithoutFormationClassesInput {

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
    userID!: string;

    @HideField()
    courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput;
}
