import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationCreateInput } from './formation-create.input';

@ArgsType()
export class CreateOneFormationArgs {

    @Field(() => FormationCreateInput, {nullable:false})
    data!: FormationCreateInput;
}
