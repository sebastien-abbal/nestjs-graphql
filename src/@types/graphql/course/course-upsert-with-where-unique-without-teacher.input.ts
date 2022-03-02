import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutTeacherInput } from './course-update-without-teacher.input';
import { CourseCreateWithoutTeacherInput } from './course-create-without-teacher.input';

@InputType()
export class CourseUpsertWithWhereUniqueWithoutTeacherInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutTeacherInput, {nullable:false})
    update!: CourseUpdateWithoutTeacherInput;

    @Field(() => CourseCreateWithoutTeacherInput, {nullable:false})
    create!: CourseCreateWithoutTeacherInput;
}
