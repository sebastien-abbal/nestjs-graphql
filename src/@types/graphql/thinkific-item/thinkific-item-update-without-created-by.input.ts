import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationSessionUpdateOneRequiredWithoutThinkificItemsInput } from '../formation-session/formation-session-update-one-required-without-thinkific-items.input';

@InputType()
export class ThinkificItemUpdateWithoutCreatedByInput {

    @Field(() => String, {nullable:true})
    thinkificID?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session?: FormationSessionUpdateOneRequiredWithoutThinkificItemsInput;
}
