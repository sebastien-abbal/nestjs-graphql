import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutThinkificItemsInput } from './user-create-without-thinkific-items.input';

@InputType()
export class UserCreateOrConnectWithoutThinkificItemsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutThinkificItemsInput, {nullable:false})
    create!: UserCreateWithoutThinkificItemsInput;
}
