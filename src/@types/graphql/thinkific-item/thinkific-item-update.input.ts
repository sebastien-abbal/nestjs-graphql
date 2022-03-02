import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutThinkificItemsInput } from '../user/user-update-one-required-without-thinkific-items.input';
import { FormationSessionUpdateOneRequiredWithoutThinkificItemsInput } from '../formation-session/formation-session-update-one-required-without-thinkific-items.input';

@InputType()
export class ThinkificItemUpdateInput {

    @HideField()
    thinkificID?: string;

    @HideField()
    createdBy?: UserUpdateOneRequiredWithoutThinkificItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session?: FormationSessionUpdateOneRequiredWithoutThinkificItemsInput;
}
