import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassCreateInput } from './formation-class-create.input';
import { FormationClassUpdateInput } from './formation-class-update.input';

@ArgsType()
export class UpsertOneFormationClassArgs {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassCreateInput, {nullable:false})
    create!: FormationClassCreateInput;

    @Field(() => FormationClassUpdateInput, {nullable:false})
    update!: FormationClassUpdateInput;
}
