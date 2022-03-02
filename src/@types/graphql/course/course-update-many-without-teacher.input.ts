import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutTeacherInput } from './course-create-without-teacher.input';
import { CourseCreateOrConnectWithoutTeacherInput } from './course-create-or-connect-without-teacher.input';
import { CourseUpsertWithWhereUniqueWithoutTeacherInput } from './course-upsert-with-where-unique-without-teacher.input';
import { CourseCreateManyTeacherInputEnvelope } from './course-create-many-teacher-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithWhereUniqueWithoutTeacherInput } from './course-update-with-where-unique-without-teacher.input';
import { CourseUpdateManyWithWhereWithoutTeacherInput } from './course-update-many-with-where-without-teacher.input';
import { CourseScalarWhereInput } from './course-scalar-where.input';

@InputType()
export class CourseUpdateManyWithoutTeacherInput {

    @Field(() => [CourseCreateWithoutTeacherInput], {nullable:true})
    create?: Array<CourseCreateWithoutTeacherInput>;

    @Field(() => [CourseCreateOrConnectWithoutTeacherInput], {nullable:true})
    connectOrCreate?: Array<CourseCreateOrConnectWithoutTeacherInput>;

    @Field(() => [CourseUpsertWithWhereUniqueWithoutTeacherInput], {nullable:true})
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutTeacherInput>;

    @Field(() => CourseCreateManyTeacherInputEnvelope, {nullable:true})
    createMany?: CourseCreateManyTeacherInputEnvelope;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    set?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    delete?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    connect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseUpdateWithWhereUniqueWithoutTeacherInput], {nullable:true})
    update?: Array<CourseUpdateWithWhereUniqueWithoutTeacherInput>;

    @Field(() => [CourseUpdateManyWithWhereWithoutTeacherInput], {nullable:true})
    updateMany?: Array<CourseUpdateManyWithWhereWithoutTeacherInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseScalarWhereInput>;
}
