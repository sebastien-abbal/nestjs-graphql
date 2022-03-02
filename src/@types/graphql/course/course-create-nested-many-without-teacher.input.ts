import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutTeacherInput } from './course-create-without-teacher.input';
import { CourseCreateOrConnectWithoutTeacherInput } from './course-create-or-connect-without-teacher.input';
import { CourseCreateManyTeacherInputEnvelope } from './course-create-many-teacher-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseCreateNestedManyWithoutTeacherInput {

    @Field(() => [CourseCreateWithoutTeacherInput], {nullable:true})
    create?: Array<CourseCreateWithoutTeacherInput>;

    @Field(() => [CourseCreateOrConnectWithoutTeacherInput], {nullable:true})
    connectOrCreate?: Array<CourseCreateOrConnectWithoutTeacherInput>;

    @Field(() => CourseCreateManyTeacherInputEnvelope, {nullable:true})
    createMany?: CourseCreateManyTeacherInputEnvelope;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    connect?: Array<CourseWhereUniqueInput>;
}
