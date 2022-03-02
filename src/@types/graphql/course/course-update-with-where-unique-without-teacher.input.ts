import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutTeacherInput } from './course-update-without-teacher.input';

@InputType()
export class CourseUpdateWithWhereUniqueWithoutTeacherInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutTeacherInput, {nullable:false})
    data!: CourseUpdateWithoutTeacherInput;
}
