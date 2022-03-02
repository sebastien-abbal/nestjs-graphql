import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionCreateInput } from './formation-session-create.input';

@ArgsType()
export class CreateOneFormationSessionArgs {

    @Field(() => FormationSessionCreateInput, {nullable:false})
    data!: FormationSessionCreateInput;
}
