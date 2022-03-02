import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCourseSupportsInput } from './user-create-without-course-supports.input';
import { UserCreateOrConnectWithoutCourseSupportsInput } from './user-create-or-connect-without-course-supports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCourseSupportsInput {

    @Field(() => UserCreateWithoutCourseSupportsInput, {nullable:true})
    create?: UserCreateWithoutCourseSupportsInput;

    @Field(() => UserCreateOrConnectWithoutCourseSupportsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCourseSupportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
