import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTeacherInput } from './user-create-without-teacher.input';
import { UserCreateOrConnectWithoutTeacherInput } from './user-create-or-connect-without-teacher.input';
import { UserUpsertWithoutTeacherInput } from './user-upsert-without-teacher.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTeacherInput } from './user-update-without-teacher.input';

@InputType()
export class UserUpdateOneRequiredWithoutTeacherInput {

    @Field(() => UserCreateWithoutTeacherInput, {nullable:true})
    create?: UserCreateWithoutTeacherInput;

    @Field(() => UserCreateOrConnectWithoutTeacherInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput;

    @Field(() => UserUpsertWithoutTeacherInput, {nullable:true})
    upsert?: UserUpsertWithoutTeacherInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTeacherInput, {nullable:true})
    update?: UserUpdateWithoutTeacherInput;
}
