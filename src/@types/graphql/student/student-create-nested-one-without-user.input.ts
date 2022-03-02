import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentCreateWithoutUserInput } from './student-create-without-user.input';
import { StudentCreateOrConnectWithoutUserInput } from './student-create-or-connect-without-user.input';
import { StudentWhereUniqueInput } from './student-where-unique.input';

@InputType()
export class StudentCreateNestedOneWithoutUserInput {

    @Field(() => StudentCreateWithoutUserInput, {nullable:true})
    create?: StudentCreateWithoutUserInput;

    @Field(() => StudentCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput;

    @Field(() => StudentWhereUniqueInput, {nullable:true})
    connect?: StudentWhereUniqueInput;
}
