import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutThinkificItemsInput } from './user-create-without-thinkific-items.input';
import { UserCreateOrConnectWithoutThinkificItemsInput } from './user-create-or-connect-without-thinkific-items.input';
import { UserUpsertWithoutThinkificItemsInput } from './user-upsert-without-thinkific-items.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutThinkificItemsInput } from './user-update-without-thinkific-items.input';

@InputType()
export class UserUpdateOneRequiredWithoutThinkificItemsInput {

    @Field(() => UserCreateWithoutThinkificItemsInput, {nullable:true})
    create?: UserCreateWithoutThinkificItemsInput;

    @Field(() => UserCreateOrConnectWithoutThinkificItemsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutThinkificItemsInput;

    @Field(() => UserUpsertWithoutThinkificItemsInput, {nullable:true})
    upsert?: UserUpsertWithoutThinkificItemsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutThinkificItemsInput, {nullable:true})
    update?: UserUpdateWithoutThinkificItemsInput;
}
