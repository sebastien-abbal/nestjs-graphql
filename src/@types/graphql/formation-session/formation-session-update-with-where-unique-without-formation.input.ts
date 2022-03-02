import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithoutFormationInput } from './formation-session-update-without-formation.input';

@InputType()
export class FormationSessionUpdateWithWhereUniqueWithoutFormationInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionUpdateWithoutFormationInput, {nullable:false})
    data!: FormationSessionUpdateWithoutFormationInput;
}
