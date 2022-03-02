import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentCreateWithoutUserInput } from './student-create-without-user.input';
import { StudentCreateOrConnectWithoutUserInput } from './student-create-or-connect-without-user.input';
import { StudentUpsertWithoutUserInput } from './student-upsert-without-user.input';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { StudentUpdateWithoutUserInput } from './student-update-without-user.input';

@InputType()
export class StudentUpdateOneWithoutUserInput {

    @Field(() => StudentCreateWithoutUserInput, {nullable:true})
    create?: StudentCreateWithoutUserInput;

    @Field(() => StudentCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput;

    @Field(() => StudentUpsertWithoutUserInput, {nullable:true})
    upsert?: StudentUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => StudentWhereUniqueInput, {nullable:true})
    connect?: StudentWhereUniqueInput;

    @Field(() => StudentUpdateWithoutUserInput, {nullable:true})
    update?: StudentUpdateWithoutUserInput;
}
