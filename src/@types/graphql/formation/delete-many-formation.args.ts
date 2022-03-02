import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationWhereInput } from './formation-where.input';

@ArgsType()
export class DeleteManyFormationArgs {

    @Field(() => FormationWhereInput, {nullable:true})
    where?: FormationWhereInput;
}
