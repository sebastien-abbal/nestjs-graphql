import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionUpdateInput } from './formation-session-update.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';

@ArgsType()
export class UpdateOneFormationSessionArgs {

    @Field(() => FormationSessionUpdateInput, {nullable:false})
    data!: FormationSessionUpdateInput;

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;
}
