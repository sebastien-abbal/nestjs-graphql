import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationUpdateInput } from './formation-update.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@ArgsType()
export class UpdateOneFormationArgs {

    @Field(() => FormationUpdateInput, {nullable:false})
    data!: FormationUpdateInput;

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;
}
