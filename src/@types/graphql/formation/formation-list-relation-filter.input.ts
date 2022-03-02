import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereInput } from './formation-where.input';

@InputType()
export class FormationListRelationFilter {

    @Field(() => FormationWhereInput, {nullable:true})
    every?: FormationWhereInput;

    @Field(() => FormationWhereInput, {nullable:true})
    some?: FormationWhereInput;

    @Field(() => FormationWhereInput, {nullable:true})
    none?: FormationWhereInput;
}
