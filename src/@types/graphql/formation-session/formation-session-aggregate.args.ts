import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionWhereInput } from './formation-session-where.input';
import { FormationSessionOrderByWithRelationInput } from './formation-session-order-by-with-relation.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormationSessionCountAggregateInput } from './formation-session-count-aggregate.input';
import { FormationSessionMinAggregateInput } from './formation-session-min-aggregate.input';
import { FormationSessionMaxAggregateInput } from './formation-session-max-aggregate.input';

@ArgsType()
export class FormationSessionAggregateArgs {

    @Field(() => FormationSessionWhereInput, {nullable:true})
    where?: FormationSessionWhereInput;

    @Field(() => [FormationSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormationSessionOrderByWithRelationInput>;

    @Field(() => FormationSessionWhereUniqueInput, {nullable:true})
    cursor?: FormationSessionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FormationSessionCountAggregateInput, {nullable:true})
    _count?: FormationSessionCountAggregateInput;

    @Field(() => FormationSessionMinAggregateInput, {nullable:true})
    _min?: FormationSessionMinAggregateInput;

    @Field(() => FormationSessionMaxAggregateInput, {nullable:true})
    _max?: FormationSessionMaxAggregateInput;
}
