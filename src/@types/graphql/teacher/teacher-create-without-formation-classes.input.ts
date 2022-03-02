import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTeacherInput } from '../user/user-create-nested-one-without-teacher.input';
import { CourseCreateNestedManyWithoutTeacherInput } from '../course/course-create-nested-many-without-teacher.input';

@InputType()
export class TeacherCreateWithoutFormationClassesInput {

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
    courses?: CourseCreateNestedManyWithoutTeacherInput;
}
