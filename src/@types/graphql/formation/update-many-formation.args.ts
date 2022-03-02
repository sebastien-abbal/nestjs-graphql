import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationUpdateManyMutationInput } from './formation-update-many-mutation.input';
import { FormationWhereInput } from './formation-where.input';

@ArgsType()
export class UpdateManyFormationArgs {

    @Field(() => FormationUpdateManyMutationInput, {nullable:false})
    data!: FormationUpdateManyMutationInput;

    @Field(() => FormationWhereInput, {nullable:true})
    where?: FormationWhereInput;
}
