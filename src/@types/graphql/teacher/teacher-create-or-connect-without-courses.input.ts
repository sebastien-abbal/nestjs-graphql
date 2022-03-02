import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherCreateWithoutCoursesInput } from './teacher-create-without-courses.input';

@InputType()
export class TeacherCreateOrConnectWithoutCoursesInput {

    @Field(() => TeacherWhereUniqueInput, {nullable:false})
    where!: TeacherWhereUniqueInput;

    @Field(() => TeacherCreateWithoutCoursesInput, {nullable:false})
    create!: TeacherCreateWithoutCoursesInput;
}
