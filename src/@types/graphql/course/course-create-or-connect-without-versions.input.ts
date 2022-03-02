import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateWithoutVersionsInput } from './course-create-without-versions.input';

@InputType()
export class CourseCreateOrConnectWithoutVersionsInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutVersionsInput, {nullable:false})
    create!: CourseCreateWithoutVersionsInput;
}
