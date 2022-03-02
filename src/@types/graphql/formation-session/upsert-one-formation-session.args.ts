import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionCreateInput } from './formation-session-create.input';
import { FormationSessionUpdateInput } from './formation-session-update.input';

@ArgsType()
export class UpsertOneFormationSessionArgs {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionCreateInput, {nullable:false})
    create!: FormationSessionCreateInput;

    @Field(() => FormationSessionUpdateInput, {nullable:false})
    update!: FormationSessionUpdateInput;
}
