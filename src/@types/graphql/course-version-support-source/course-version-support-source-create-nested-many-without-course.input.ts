import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateWithoutCourseInput } from './course-version-support-source-create-without-course.input';
import { CourseVersionSupportSourceCreateOrConnectWithoutCourseInput } from './course-version-support-source-create-or-connect-without-course.input';
import { CourseVersionSupportSourceCreateManyCourseInputEnvelope } from './course-version-support-source-create-many-course-input-envelope.input';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';

@InputType()
export class CourseVersionSupportSourceCreateNestedManyWithoutCourseInput {

    @Field(() => [CourseVersionSupportSourceCreateWithoutCourseInput], {nullable:true})
    create?: Array<CourseVersionSupportSourceCreateWithoutCourseInput>;

    @Field(() => [CourseVersionSupportSourceCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionSupportSourceCreateOrConnectWithoutCourseInput>;

    @Field(() => CourseVersionSupportSourceCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: CourseVersionSupportSourceCreateManyCourseInputEnvelope;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionSupportSourceWhereUniqueInput>;
}
