import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionUpdateWithoutThinkificItemsInput } from './formation-session-update-without-thinkific-items.input';
import { FormationSessionCreateWithoutThinkificItemsInput } from './formation-session-create-without-thinkific-items.input';

@InputType()
export class FormationSessionUpsertWithoutThinkificItemsInput {

    @Field(() => FormationSessionUpdateWithoutThinkificItemsInput, {nullable:false})
    update!: FormationSessionUpdateWithoutThinkificItemsInput;

    @Field(() => FormationSessionCreateWithoutThinkificItemsInput, {nullable:false})
    create!: FormationSessionCreateWithoutThinkificItemsInput;
}
