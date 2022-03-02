import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherCreateWithoutCoursesInput } from './teacher-create-without-courses.input';
import { TeacherCreateOrConnectWithoutCoursesInput } from './teacher-create-or-connect-without-courses.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';

@InputType()
export class TeacherCreateNestedOneWithoutCoursesInput {

    @Field(() => TeacherCreateWithoutCoursesInput, {nullable:true})
    create?: TeacherCreateWithoutCoursesInput;

    @Field(() => TeacherCreateOrConnectWithoutCoursesInput, {nullable:true})
    connectOrCreate?: TeacherCreateOrConnectWithoutCoursesInput;

    @Field(() => TeacherWhereUniqueInput, {nullable:true})
    connect?: TeacherWhereUniqueInput;
}
