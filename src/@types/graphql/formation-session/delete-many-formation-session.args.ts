import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionWhereInput } from './formation-session-where.input';

@ArgsType()
export class DeleteManyFormationSessionArgs {

    @Field(() => FormationSessionWhereInput, {nullable:true})
    where?: FormationSessionWhereInput;
}
