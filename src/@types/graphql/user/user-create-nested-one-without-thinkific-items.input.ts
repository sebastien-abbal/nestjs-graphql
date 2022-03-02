import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutThinkificItemsInput } from './user-create-without-thinkific-items.input';
import { UserCreateOrConnectWithoutThinkificItemsInput } from './user-create-or-connect-without-thinkific-items.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutThinkificItemsInput {

    @Field(() => UserCreateWithoutThinkificItemsInput, {nullable:true})
    create?: UserCreateWithoutThinkificItemsInput;

    @Field(() => UserCreateOrConnectWithoutThinkificItemsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutThinkificItemsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
