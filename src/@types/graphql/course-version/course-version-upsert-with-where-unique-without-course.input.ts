import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithoutCourseInput } from './course-version-update-without-course.input';
import { CourseVersionCreateWithoutCourseInput } from './course-version-create-without-course.input';

@InputType()
export class CourseVersionUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionUpdateWithoutCourseInput, {nullable:false})
    update!: CourseVersionUpdateWithoutCourseInput;

    @Field(() => CourseVersionCreateWithoutCourseInput, {nullable:false})
    create!: CourseVersionCreateWithoutCourseInput;
}
