import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherCreateWithoutCoursesInput } from './teacher-create-without-courses.input';
import { TeacherCreateOrConnectWithoutCoursesInput } from './teacher-create-or-connect-without-courses.input';
import { TeacherUpsertWithoutCoursesInput } from './teacher-upsert-without-courses.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherUpdateWithoutCoursesInput } from './teacher-update-without-courses.input';

@InputType()
export class TeacherUpdateOneRequiredWithoutCoursesInput {

    @Field(() => TeacherCreateWithoutCoursesInput, {nullable:true})
    create?: TeacherCreateWithoutCoursesInput;

    @Field(() => TeacherCreateOrConnectWithoutCoursesInput, {nullable:true})
    connectOrCreate?: TeacherCreateOrConnectWithoutCoursesInput;

    @Field(() => TeacherUpsertWithoutCoursesInput, {nullable:true})
    upsert?: TeacherUpsertWithoutCoursesInput;

    @Field(() => TeacherWhereUniqueInput, {nullable:true})
    connect?: TeacherWhereUniqueInput;

    @Field(() => TeacherUpdateWithoutCoursesInput, {nullable:true})
    update?: TeacherUpdateWithoutCoursesInput;
}
