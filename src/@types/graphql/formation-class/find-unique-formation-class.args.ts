import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';

@ArgsType()
export class FindUniqueFormationClassArgs {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;
}
