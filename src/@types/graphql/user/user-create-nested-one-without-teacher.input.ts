import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTeacherInput } from './user-create-without-teacher.input';
import { UserCreateOrConnectWithoutTeacherInput } from './user-create-or-connect-without-teacher.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTeacherInput {

    @Field(() => UserCreateWithoutTeacherInput, {nullable:true})
    create?: UserCreateWithoutTeacherInput;

    @Field(() => UserCreateOrConnectWithoutTeacherInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
