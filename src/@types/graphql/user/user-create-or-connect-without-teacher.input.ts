import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTeacherInput } from './user-create-without-teacher.input';

@InputType()
export class UserCreateOrConnectWithoutTeacherInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTeacherInput, {nullable:false})
    create!: UserCreateWithoutTeacherInput;
}
