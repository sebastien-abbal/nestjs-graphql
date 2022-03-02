import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionCreateWithoutThinkificItemsInput } from './formation-session-create-without-thinkific-items.input';

@InputType()
export class FormationSessionCreateOrConnectWithoutThinkificItemsInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionCreateWithoutThinkificItemsInput, {nullable:false})
    create!: FormationSessionCreateWithoutThinkificItemsInput;
}
