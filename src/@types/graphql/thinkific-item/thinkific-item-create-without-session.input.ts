import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutThinkificItemsInput } from '../user/user-create-nested-one-without-thinkific-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ThinkificItemCreateWithoutSessionInput {

    @Field(() => String, {nullable:false})
    thinkificID!: string;

    @HideField()
    createdBy!: UserCreateNestedOneWithoutThinkificItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;
}
