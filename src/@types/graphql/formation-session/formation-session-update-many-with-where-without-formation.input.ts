import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionScalarWhereInput } from './formation-session-scalar-where.input';
import { FormationSessionUpdateManyMutationInput } from './formation-session-update-many-mutation.input';

@InputType()
export class FormationSessionUpdateManyWithWhereWithoutFormationInput {

    @Field(() => FormationSessionScalarWhereInput, {nullable:false})
    where!: FormationSessionScalarWhereInput;

    @Field(() => FormationSessionUpdateManyMutationInput, {nullable:false})
    data!: FormationSessionUpdateManyMutationInput;
}
