import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutSupportsInput } from './course-version-create-without-supports.input';
import { CourseVersionCreateOrConnectWithoutSupportsInput } from './course-version-create-or-connect-without-supports.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';

@InputType()
export class CourseVersionCreateNestedOneWithoutSupportsInput {

    @Field(() => CourseVersionCreateWithoutSupportsInput, {nullable:true})
    create?: CourseVersionCreateWithoutSupportsInput;

    @Field(() => CourseVersionCreateOrConnectWithoutSupportsInput, {nullable:true})
    connectOrCreate?: CourseVersionCreateOrConnectWithoutSupportsInput;

    @Field(() => CourseVersionWhereUniqueInput, {nullable:true})
    connect?: CourseVersionWhereUniqueInput;
}
