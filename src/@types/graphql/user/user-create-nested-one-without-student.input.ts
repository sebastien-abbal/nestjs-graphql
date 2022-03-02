import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStudentInput } from './user-create-without-student.input';
import { UserCreateOrConnectWithoutStudentInput } from './user-create-or-connect-without-student.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutStudentInput {

    @Field(() => UserCreateWithoutStudentInput, {nullable:true})
    create?: UserCreateWithoutStudentInput;

    @Field(() => UserCreateOrConnectWithoutStudentInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
