import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceUpdateWithoutCourseInput } from './course-version-support-source-update-without-course.input';
import { CourseVersionSupportSourceCreateWithoutCourseInput } from './course-version-support-source-create-without-course.input';

@InputType()
export class CourseVersionSupportSourceUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => CourseVersionSupportSourceUpdateWithoutCourseInput, {nullable:false})
    update!: CourseVersionSupportSourceUpdateWithoutCourseInput;

    @Field(() => CourseVersionSupportSourceCreateWithoutCourseInput, {nullable:false})
    create!: CourseVersionSupportSourceCreateWithoutCourseInput;
}
