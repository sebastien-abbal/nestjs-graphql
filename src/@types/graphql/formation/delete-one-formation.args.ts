import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@ArgsType()
export class DeleteOneFormationArgs {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;
}
