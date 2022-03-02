import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassCreateInput } from './formation-class-create.input';

@ArgsType()
export class CreateOneFormationClassArgs {

    @Field(() => FormationClassCreateInput, {nullable:false})
    data!: FormationClassCreateInput;
}
