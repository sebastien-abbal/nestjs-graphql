import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassUpdateInput } from './formation-class-update.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';

@ArgsType()
export class UpdateOneFormationClassArgs {

    @Field(() => FormationClassUpdateInput, {nullable:false})
    data!: FormationClassUpdateInput;

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;
}
