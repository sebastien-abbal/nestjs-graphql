import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereInput } from './formation-session-where.input';

@InputType()
export class FormationSessionRelationFilter {

    @Field(() => FormationSessionWhereInput, {nullable:true})
    is?: FormationSessionWhereInput;

    @Field(() => FormationSessionWhereInput, {nullable:true})
    isNot?: FormationSessionWhereInput;
}
