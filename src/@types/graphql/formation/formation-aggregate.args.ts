import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationWhereInput } from './formation-where.input';
import { FormationOrderByWithRelationInput } from './formation-order-by-with-relation.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormationCountAggregateInput } from './formation-count-aggregate.input';
import { FormationMinAggregateInput } from './formation-min-aggregate.input';
import { FormationMaxAggregateInput } from './formation-max-aggregate.input';

@ArgsType()
export class FormationAggregateArgs {

    @Field(() => FormationWhereInput, {nullable:true})
    where?: FormationWhereInput;

    @Field(() => [FormationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormationOrderByWithRelationInput>;

    @Field(() => FormationWhereUniqueInput, {nullable:true})
    cursor?: FormationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FormationCountAggregateInput, {nullable:true})
    _count?: FormationCountAggregateInput;

    @Field(() => FormationMinAggregateInput, {nullable:true})
    _min?: FormationMinAggregateInput;

    @Field(() => FormationMaxAggregateInput, {nullable:true})
    _max?: FormationMaxAggregateInput;
}
