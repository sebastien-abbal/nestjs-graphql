import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherUpdateWithoutCoursesInput } from './teacher-update-without-courses.input';
import { TeacherCreateWithoutCoursesInput } from './teacher-create-without-courses.input';

@InputType()
export class TeacherUpsertWithoutCoursesInput {

    @Field(() => TeacherUpdateWithoutCoursesInput, {nullable:false})
    update!: TeacherUpdateWithoutCoursesInput;

    @Field(() => TeacherCreateWithoutCoursesInput, {nullable:false})
    create!: TeacherCreateWithoutCoursesInput;
}
