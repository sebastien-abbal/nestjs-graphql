import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutThinkificItemsInput } from './user-update-without-thinkific-items.input';
import { UserCreateWithoutThinkificItemsInput } from './user-create-without-thinkific-items.input';

@InputType()
export class UserUpsertWithoutThinkificItemsInput {

    @Field(() => UserUpdateWithoutThinkificItemsInput, {nullable:false})
    update!: UserUpdateWithoutThinkificItemsInput;

    @Field(() => UserCreateWithoutThinkificItemsInput, {nullable:false})
    create!: UserCreateWithoutThinkificItemsInput;
}
