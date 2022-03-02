import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateWithoutTeacherInput } from './course-create-without-teacher.input';

@InputType()
export class CourseCreateOrConnectWithoutTeacherInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutTeacherInput, {nullable:false})
    create!: CourseCreateWithoutTeacherInput;
}
