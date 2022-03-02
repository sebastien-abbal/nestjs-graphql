import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceUpdateWithoutCourseInput } from './course-version-support-source-update-without-course.input';

@InputType()
export class CourseVersionSupportSourceUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => CourseVersionSupportSourceUpdateWithoutCourseInput, {nullable:false})
    data!: CourseVersionSupportSourceUpdateWithoutCourseInput;
}
