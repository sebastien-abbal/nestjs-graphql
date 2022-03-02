import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCoursesInput } from './user-create-without-courses.input';
import { UserCreateOrConnectWithoutCoursesInput } from './user-create-or-connect-without-courses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCoursesInput {

    @Field(() => UserCreateWithoutCoursesInput, {nullable:true})
    create?: UserCreateWithoutCoursesInput;

    @Field(() => UserCreateOrConnectWithoutCoursesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
