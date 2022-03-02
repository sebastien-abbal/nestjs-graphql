import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationCreateInput } from './formation-create.input';
import { FormationUpdateInput } from './formation-update.input';

@ArgsType()
export class UpsertOneFormationArgs {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationCreateInput, {nullable:false})
    create!: FormationCreateInput;

    @Field(() => FormationUpdateInput, {nullable:false})
    update!: FormationUpdateInput;
}
