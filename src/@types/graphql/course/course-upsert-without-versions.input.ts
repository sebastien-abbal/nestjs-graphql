import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUpdateWithoutVersionsInput } from './course-update-without-versions.input';
import { CourseCreateWithoutVersionsInput } from './course-create-without-versions.input';

@InputType()
export class CourseUpsertWithoutVersionsInput {

    @Field(() => CourseUpdateWithoutVersionsInput, {nullable:false})
    update!: CourseUpdateWithoutVersionsInput;

    @Field(() => CourseCreateWithoutVersionsInput, {nullable:false})
    create!: CourseCreateWithoutVersionsInput;
}
