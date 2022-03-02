import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutStudentInput } from './user-update-without-student.input';
import { UserCreateWithoutStudentInput } from './user-create-without-student.input';

@InputType()
export class UserUpsertWithoutStudentInput {

    @Field(() => UserUpdateWithoutStudentInput, {nullable:false})
    update!: UserUpdateWithoutStudentInput;

    @Field(() => UserCreateWithoutStudentInput, {nullable:false})
    create!: UserCreateWithoutStudentInput;
}
