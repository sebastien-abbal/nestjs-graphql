import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutThinkificItemsInput } from './formation-session-create-without-thinkific-items.input';
import { FormationSessionCreateOrConnectWithoutThinkificItemsInput } from './formation-session-create-or-connect-without-thinkific-items.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';

@InputType()
export class FormationSessionCreateNestedOneWithoutThinkificItemsInput {

    @Field(() => FormationSessionCreateWithoutThinkificItemsInput, {nullable:true})
    create?: FormationSessionCreateWithoutThinkificItemsInput;

    @Field(() => FormationSessionCreateOrConnectWithoutThinkificItemsInput, {nullable:true})
    connectOrCreate?: FormationSessionCreateOrConnectWithoutThinkificItemsInput;

    @Field(() => FormationSessionWhereUniqueInput, {nullable:true})
    connect?: FormationSessionWhereUniqueInput;
}
