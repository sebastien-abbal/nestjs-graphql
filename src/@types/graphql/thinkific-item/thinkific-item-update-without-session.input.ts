import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutThinkificItemsInput } from '../user/user-update-one-required-without-thinkific-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ThinkificItemUpdateWithoutSessionInput {

    @Field(() => String, {nullable:true})
    thinkificID?: string;

    @HideField()
    createdBy?: UserUpdateOneRequiredWithoutThinkificItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;
}
