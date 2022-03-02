import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereInput } from './formation-where.input';

@InputType()
export class FormationRelationFilter {

    @Field(() => FormationWhereInput, {nullable:true})
    is?: FormationWhereInput;

    @Field(() => FormationWhereInput, {nullable:true})
    isNot?: FormationWhereInput;
}
