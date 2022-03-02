import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionUpdateWithoutSupportsInput } from './course-version-update-without-supports.input';
import { CourseVersionCreateWithoutSupportsInput } from './course-version-create-without-supports.input';

@InputType()
export class CourseVersionUpsertWithoutSupportsInput {

    @Field(() => CourseVersionUpdateWithoutSupportsInput, {nullable:false})
    update!: CourseVersionUpdateWithoutSupportsInput;

    @Field(() => CourseVersionCreateWithoutSupportsInput, {nullable:false})
    create!: CourseVersionCreateWithoutSupportsInput;
}
