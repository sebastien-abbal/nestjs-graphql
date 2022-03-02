import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTeacherInput } from './user-update-without-teacher.input';
import { UserCreateWithoutTeacherInput } from './user-create-without-teacher.input';

@InputType()
export class UserUpsertWithoutTeacherInput {

    @Field(() => UserUpdateWithoutTeacherInput, {nullable:false})
    update!: UserUpdateWithoutTeacherInput;

    @Field(() => UserCreateWithoutTeacherInput, {nullable:false})
    create!: UserCreateWithoutTeacherInput;
}
