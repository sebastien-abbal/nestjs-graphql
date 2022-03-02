import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionCreateWithoutSupportsInput } from './course-version-create-without-supports.input';

@InputType()
export class CourseVersionCreateOrConnectWithoutSupportsInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionCreateWithoutSupportsInput, {nullable:false})
    create!: CourseVersionCreateWithoutSupportsInput;
}
