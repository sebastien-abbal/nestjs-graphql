import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherCreateWithoutUserInput } from './teacher-create-without-user.input';
import { TeacherCreateOrConnectWithoutUserInput } from './teacher-create-or-connect-without-user.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';

@InputType()
export class TeacherCreateNestedOneWithoutUserInput {

    @Field(() => TeacherCreateWithoutUserInput, {nullable:true})
    create?: TeacherCreateWithoutUserInput;

    @Field(() => TeacherCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput;

    @Field(() => TeacherWhereUniqueInput, {nullable:true})
    connect?: TeacherWhereUniqueInput;
}
