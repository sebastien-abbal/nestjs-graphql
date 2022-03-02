import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCoursesInput } from './user-create-without-courses.input';
import { UserCreateOrConnectWithoutCoursesInput } from './user-create-or-connect-without-courses.input';
import { UserUpsertWithoutCoursesInput } from './user-upsert-without-courses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCoursesInput } from './user-update-without-courses.input';

@InputType()
export class UserUpdateOneRequiredWithoutCoursesInput {

    @Field(() => UserCreateWithoutCoursesInput, {nullable:true})
    create?: UserCreateWithoutCoursesInput;

    @Field(() => UserCreateOrConnectWithoutCoursesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput;

    @Field(() => UserUpsertWithoutCoursesInput, {nullable:true})
    upsert?: UserUpsertWithoutCoursesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCoursesInput, {nullable:true})
    update?: UserUpdateWithoutCoursesInput;
}
