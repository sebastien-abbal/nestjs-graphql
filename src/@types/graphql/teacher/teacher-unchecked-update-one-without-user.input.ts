import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherCreateWithoutUserInput } from './teacher-create-without-user.input';
import { TeacherCreateOrConnectWithoutUserInput } from './teacher-create-or-connect-without-user.input';
import { TeacherUpsertWithoutUserInput } from './teacher-upsert-without-user.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherUpdateWithoutUserInput } from './teacher-update-without-user.input';

@InputType()
export class TeacherUncheckedUpdateOneWithoutUserInput {

    @Field(() => TeacherCreateWithoutUserInput, {nullable:true})
    create?: TeacherCreateWithoutUserInput;

    @Field(() => TeacherCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput;

    @Field(() => TeacherUpsertWithoutUserInput, {nullable:true})
    upsert?: TeacherUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TeacherWhereUniqueInput, {nullable:true})
    connect?: TeacherWhereUniqueInput;

    @Field(() => TeacherUpdateWithoutUserInput, {nullable:true})
    update?: TeacherUpdateWithoutUserInput;
}
