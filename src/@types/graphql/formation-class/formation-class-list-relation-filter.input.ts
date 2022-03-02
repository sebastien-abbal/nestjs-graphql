import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereInput } from './formation-class-where.input';

@InputType()
export class FormationClassListRelationFilter {

    @Field(() => FormationClassWhereInput, {nullable:true})
    every?: FormationClassWhereInput;

    @Field(() => FormationClassWhereInput, {nullable:true})
    some?: FormationClassWhereInput;

    @Field(() => FormationClassWhereInput, {nullable:true})
    none?: FormationClassWhereInput;
}
