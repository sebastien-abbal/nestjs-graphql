import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithoutCourseInput } from './course-version-update-without-course.input';

@InputType()
export class CourseVersionUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionUpdateWithoutCourseInput, {nullable:false})
    data!: CourseVersionUpdateWithoutCourseInput;
}
