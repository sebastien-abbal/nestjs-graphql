import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCourseSupportsInput } from './user-create-without-course-supports.input';
import { UserCreateOrConnectWithoutCourseSupportsInput } from './user-create-or-connect-without-course-supports.input';
import { UserUpsertWithoutCourseSupportsInput } from './user-upsert-without-course-supports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCourseSupportsInput } from './user-update-without-course-supports.input';

@InputType()
export class UserUpdateOneRequiredWithoutCourseSupportsInput {

    @Field(() => UserCreateWithoutCourseSupportsInput, {nullable:true})
    create?: UserCreateWithoutCourseSupportsInput;

    @Field(() => UserCreateOrConnectWithoutCourseSupportsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCourseSupportsInput;

    @Field(() => UserUpsertWithoutCourseSupportsInput, {nullable:true})
    upsert?: UserUpsertWithoutCourseSupportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCourseSupportsInput, {nullable:true})
    update?: UserUpdateWithoutCourseSupportsInput;
}
