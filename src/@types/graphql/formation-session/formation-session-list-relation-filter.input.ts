import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereInput } from './formation-session-where.input';

@InputType()
export class FormationSessionListRelationFilter {

    @Field(() => FormationSessionWhereInput, {nullable:true})
    every?: FormationSessionWhereInput;

    @Field(() => FormationSessionWhereInput, {nullable:true})
    some?: FormationSessionWhereInput;

    @Field(() => FormationSessionWhereInput, {nullable:true})
    none?: FormationSessionWhereInput;
}
