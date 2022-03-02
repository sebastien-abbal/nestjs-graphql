import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionWhereInput } from './formation-session-where.input';
import { FormationSessionOrderByWithAggregationInput } from './formation-session-order-by-with-aggregation.input';
import { FormationSessionScalarFieldEnum } from './formation-session-scalar-field.enum';
import { FormationSessionScalarWhereWithAggregatesInput } from './formation-session-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FormationSessionCountAggregateInput } from './formation-session-count-aggregate.input';
import { FormationSessionMinAggregateInput } from './formation-session-min-aggregate.input';
import { FormationSessionMaxAggregateInput } from './formation-session-max-aggregate.input';

@ArgsType()
export class FormationSessionGroupByArgs {

    @Field(() => FormationSessionWhereInput, {nullable:true})
    where?: FormationSessionWhereInput;

    @Field(() => [FormationSessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FormationSessionOrderByWithAggregationInput>;

    @Field(() => [FormationSessionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FormationSessionScalarFieldEnum>;

    @Field(() => FormationSessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: FormationSessionScalarWhereWithAggregatesInput;

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
