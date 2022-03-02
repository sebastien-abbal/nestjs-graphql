import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutThinkificItemsInput } from './formation-session-create-without-thinkific-items.input';
import { FormationSessionCreateOrConnectWithoutThinkificItemsInput } from './formation-session-create-or-connect-without-thinkific-items.input';
import { FormationSessionUpsertWithoutThinkificItemsInput } from './formation-session-upsert-without-thinkific-items.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithoutThinkificItemsInput } from './formation-session-update-without-thinkific-items.input';

@InputType()
export class FormationSessionUpdateOneRequiredWithoutThinkificItemsInput {

    @Field(() => FormationSessionCreateWithoutThinkificItemsInput, {nullable:true})
    create?: FormationSessionCreateWithoutThinkificItemsInput;

    @Field(() => FormationSessionCreateOrConnectWithoutThinkificItemsInput, {nullable:true})
    connectOrCreate?: FormationSessionCreateOrConnectWithoutThinkificItemsInput;

    @Field(() => FormationSessionUpsertWithoutThinkificItemsInput, {nullable:true})
    upsert?: FormationSessionUpsertWithoutThinkificItemsInput;

    @Field(() => FormationSessionWhereUniqueInput, {nullable:true})
    connect?: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionUpdateWithoutThinkificItemsInput, {nullable:true})
    update?: FormationSessionUpdateWithoutThinkificItemsInput;
}
