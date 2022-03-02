import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassUpdateManyMutationInput } from './formation-class-update-many-mutation.input';
import { FormationClassWhereInput } from './formation-class-where.input';

@ArgsType()
export class UpdateManyFormationClassArgs {

    @Field(() => FormationClassUpdateManyMutationInput, {nullable:false})
    data!: FormationClassUpdateManyMutationInput;

    @Field(() => FormationClassWhereInput, {nullable:true})
    where?: FormationClassWhereInput;
}
