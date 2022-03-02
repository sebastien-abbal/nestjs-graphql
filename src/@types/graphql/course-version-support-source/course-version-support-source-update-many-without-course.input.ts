import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateWithoutCourseInput } from './course-version-support-source-create-without-course.input';
import { CourseVersionSupportSourceCreateOrConnectWithoutCourseInput } from './course-version-support-source-create-or-connect-without-course.input';
import { CourseVersionSupportSourceUpsertWithWhereUniqueWithoutCourseInput } from './course-version-support-source-upsert-with-where-unique-without-course.input';
import { CourseVersionSupportSourceCreateManyCourseInputEnvelope } from './course-version-support-source-create-many-course-input-envelope.input';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceUpdateWithWhereUniqueWithoutCourseInput } from './course-version-support-source-update-with-where-unique-without-course.input';
import { CourseVersionSupportSourceUpdateManyWithWhereWithoutCourseInput } from './course-version-support-source-update-many-with-where-without-course.input';
import { CourseVersionSupportSourceScalarWhereInput } from './course-version-support-source-scalar-where.input';

@InputType()
export class CourseVersionSupportSourceUpdateManyWithoutCourseInput {

    @Field(() => [CourseVersionSupportSourceCreateWithoutCourseInput], {nullable:true})
    create?: Array<CourseVersionSupportSourceCreateWithoutCourseInput>;

    @Field(() => [CourseVersionSupportSourceCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionSupportSourceCreateOrConnectWithoutCourseInput>;

    @Field(() => [CourseVersionSupportSourceUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    upsert?: Array<CourseVersionSupportSourceUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => CourseVersionSupportSourceCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: CourseVersionSupportSourceCreateManyCourseInputEnvelope;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    set?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    delete?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    update?: Array<CourseVersionSupportSourceUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [CourseVersionSupportSourceUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    updateMany?: Array<CourseVersionSupportSourceUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [CourseVersionSupportSourceScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseVersionSupportSourceScalarWhereInput>;
}
