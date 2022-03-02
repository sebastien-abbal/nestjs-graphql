import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherCreateWithoutUserInput } from './teacher-create-without-user.input';

@InputType()
export class TeacherCreateOrConnectWithoutUserInput {

    @Field(() => TeacherWhereUniqueInput, {nullable:false})
    where!: TeacherWhereUniqueInput;

    @Field(() => TeacherCreateWithoutUserInput, {nullable:false})
    create!: TeacherCreateWithoutUserInput;
}
