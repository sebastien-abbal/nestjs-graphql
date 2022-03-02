import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutVersionsInput } from './course-create-without-versions.input';
import { CourseCreateOrConnectWithoutVersionsInput } from './course-create-or-connect-without-versions.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseCreateNestedOneWithoutVersionsInput {

    @Field(() => CourseCreateWithoutVersionsInput, {nullable:true})
    create?: CourseCreateWithoutVersionsInput;

    @Field(() => CourseCreateOrConnectWithoutVersionsInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutVersionsInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;
}
