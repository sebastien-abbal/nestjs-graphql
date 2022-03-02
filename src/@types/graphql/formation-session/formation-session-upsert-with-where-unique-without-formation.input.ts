import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithoutFormationInput } from './formation-session-update-without-formation.input';
import { FormationSessionCreateWithoutFormationInput } from './formation-session-create-without-formation.input';

@InputType()
export class FormationSessionUpsertWithWhereUniqueWithoutFormationInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionUpdateWithoutFormationInput, {nullable:false})
    update!: FormationSessionUpdateWithoutFormationInput;

    @Field(() => FormationSessionCreateWithoutFormationInput, {nullable:false})
    create!: FormationSessionCreateWithoutFormationInput;
}
