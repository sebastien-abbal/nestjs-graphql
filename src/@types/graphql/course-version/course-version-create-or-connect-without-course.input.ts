import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionCreateWithoutCourseInput } from './course-version-create-without-course.input';

@InputType()
export class CourseVersionCreateOrConnectWithoutCourseInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionCreateWithoutCourseInput, {nullable:false})
    create!: CourseVersionCreateWithoutCourseInput;
}
