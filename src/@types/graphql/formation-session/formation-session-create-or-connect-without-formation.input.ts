import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionCreateWithoutFormationInput } from './formation-session-create-without-formation.input';

@InputType()
export class FormationSessionCreateOrConnectWithoutFormationInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionCreateWithoutFormationInput, {nullable:false})
    create!: FormationSessionCreateWithoutFormationInput;
}
