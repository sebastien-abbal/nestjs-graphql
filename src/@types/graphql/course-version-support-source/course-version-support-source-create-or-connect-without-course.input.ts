import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceCreateWithoutCourseInput } from './course-version-support-source-create-without-course.input';

@InputType()
export class CourseVersionSupportSourceCreateOrConnectWithoutCourseInput {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => CourseVersionSupportSourceCreateWithoutCourseInput, {nullable:false})
    create!: CourseVersionSupportSourceCreateWithoutCourseInput;
}
