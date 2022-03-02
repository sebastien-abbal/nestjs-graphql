import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutCourseInput } from './course-version-create-without-course.input';
import { CourseVersionCreateOrConnectWithoutCourseInput } from './course-version-create-or-connect-without-course.input';
import { CourseVersionUpsertWithWhereUniqueWithoutCourseInput } from './course-version-upsert-with-where-unique-without-course.input';
import { CourseVersionCreateManyCourseInputEnvelope } from './course-version-create-many-course-input-envelope.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithWhereUniqueWithoutCourseInput } from './course-version-update-with-where-unique-without-course.input';
import { CourseVersionUpdateManyWithWhereWithoutCourseInput } from './course-version-update-many-with-where-without-course.input';
import { CourseVersionScalarWhereInput } from './course-version-scalar-where.input';

@InputType()
export class CourseVersionUpdateManyWithoutCourseInput {

    @Field(() => [CourseVersionCreateWithoutCourseInput], {nullable:true})
    create?: Array<CourseVersionCreateWithoutCourseInput>;

    @Field(() => [CourseVersionCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionCreateOrConnectWithoutCourseInput>;

    @Field(() => [CourseVersionUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    upsert?: Array<CourseVersionUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => CourseVersionCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: CourseVersionCreateManyCourseInputEnvelope;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    set?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    delete?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    update?: Array<CourseVersionUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [CourseVersionUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    updateMany?: Array<CourseVersionUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [CourseVersionScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseVersionScalarWhereInput>;
}
