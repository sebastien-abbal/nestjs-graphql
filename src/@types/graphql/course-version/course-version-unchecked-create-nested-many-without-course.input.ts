import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutCourseInput } from './course-version-create-without-course.input';
import { CourseVersionCreateOrConnectWithoutCourseInput } from './course-version-create-or-connect-without-course.input';
import { CourseVersionCreateManyCourseInputEnvelope } from './course-version-create-many-course-input-envelope.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';

@InputType()
export class CourseVersionUncheckedCreateNestedManyWithoutCourseInput {

    @Field(() => [CourseVersionCreateWithoutCourseInput], {nullable:true})
    create?: Array<CourseVersionCreateWithoutCourseInput>;

    @Field(() => [CourseVersionCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionCreateOrConnectWithoutCourseInput>;

    @Field(() => CourseVersionCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: CourseVersionCreateManyCourseInputEnvelope;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionWhereUniqueInput>;
}
