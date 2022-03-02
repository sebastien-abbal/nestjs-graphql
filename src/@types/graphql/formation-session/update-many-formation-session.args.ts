import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionUpdateManyMutationInput } from './formation-session-update-many-mutation.input';
import { FormationSessionWhereInput } from './formation-session-where.input';

@ArgsType()
export class UpdateManyFormationSessionArgs {

    @Field(() => FormationSessionUpdateManyMutationInput, {nullable:false})
    data!: FormationSessionUpdateManyMutationInput;

    @Field(() => FormationSessionWhereInput, {nullable:true})
    where?: FormationSessionWhereInput;
}
