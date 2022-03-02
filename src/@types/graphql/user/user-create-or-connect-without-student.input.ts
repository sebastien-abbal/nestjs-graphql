import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutStudentInput } from './user-create-without-student.input';

@InputType()
export class UserCreateOrConnectWithoutStudentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutStudentInput, {nullable:false})
    create!: UserCreateWithoutStudentInput;
}
