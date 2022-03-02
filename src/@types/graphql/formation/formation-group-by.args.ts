import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationWhereInput } from './formation-where.input';
import { FormationOrderByWithAggregationInput } from './formation-order-by-with-aggregation.input';
import { FormationScalarFieldEnum } from './formation-scalar-field.enum';
import { FormationScalarWhereWithAggregatesInput } from './formation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FormationCountAggregateInput } from './formation-count-aggregate.input';
import { FormationMinAggregateInput } from './formation-min-aggregate.input';
import { FormationMaxAggregateInput } from './formation-max-aggregate.input';

@ArgsType()
export class FormationGroupByArgs {

    @Field(() => FormationWhereInput, {nullable:true})
    where?: FormationWhereInput;

    @Field(() => [FormationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FormationOrderByWithAggregationInput>;

    @Field(() => [FormationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FormationScalarFieldEnum>;

    @Field(() => FormationScalarWhereWithAggregatesInput, {nullable:true})
    having?: FormationScalarWhereWithAggregatesInput;

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
