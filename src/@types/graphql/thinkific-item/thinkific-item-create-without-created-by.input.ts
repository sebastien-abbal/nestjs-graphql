import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationSessionCreateNestedOneWithoutThinkificItemsInput } from '../formation-session/formation-session-create-nested-one-without-thinkific-items.input';

@InputType()
export class ThinkificItemCreateWithoutCreatedByInput {

    @Field(() => String, {nullable:false})
    thinkificID!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session!: FormationSessionCreateNestedOneWithoutThinkificItemsInput;
}
