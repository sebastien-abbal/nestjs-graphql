import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereInput } from './formation-class-where.input';

@InputType()
export class FormationClassRelationFilter {

    @Field(() => FormationClassWhereInput, {nullable:true})
    is?: FormationClassWhereInput;

    @Field(() => FormationClassWhereInput, {nullable:true})
    isNot?: FormationClassWhereInput;
}
