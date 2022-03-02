import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStudentInput } from './user-create-without-student.input';
import { UserCreateOrConnectWithoutStudentInput } from './user-create-or-connect-without-student.input';
import { UserUpsertWithoutStudentInput } from './user-upsert-without-student.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutStudentInput } from './user-update-without-student.input';

@InputType()
export class UserUpdateOneRequiredWithoutStudentInput {

    @Field(() => UserCreateWithoutStudentInput, {nullable:true})
    create?: UserCreateWithoutStudentInput;

    @Field(() => UserCreateOrConnectWithoutStudentInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput;

    @Field(() => UserUpsertWithoutStudentInput, {nullable:true})
    upsert?: UserUpsertWithoutStudentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutStudentInput, {nullable:true})
    update?: UserUpdateWithoutStudentInput;
}
