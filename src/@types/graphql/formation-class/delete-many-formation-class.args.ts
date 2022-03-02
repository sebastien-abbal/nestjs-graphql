import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassWhereInput } from './formation-class-where.input';

@ArgsType()
export class DeleteManyFormationClassArgs {

    @Field(() => FormationClassWhereInput, {nullable:true})
    where?: FormationClassWhereInput;
}
