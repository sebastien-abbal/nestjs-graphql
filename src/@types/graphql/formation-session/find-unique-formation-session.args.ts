import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';

@ArgsType()
export class FindUniqueFormationSessionArgs {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;
}
