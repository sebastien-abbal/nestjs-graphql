import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutThinkificItemsInput } from '../user/user-create-nested-one-without-thinkific-items.input';
import { FormationSessionCreateNestedOneWithoutThinkificItemsInput } from '../formation-session/formation-session-create-nested-one-without-thinkific-items.input';

@InputType()
export class ThinkificItemCreateInput {

    @HideField()
    thinkificID!: string;

    @HideField()
    createdBy!: UserCreateNestedOneWithoutThinkificItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session!: FormationSessionCreateNestedOneWithoutThinkificItemsInput;
}
