import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassWhereInput } from './formation-class-where.input';
import { FormationClassOrderByWithAggregationInput } from './formation-class-order-by-with-aggregation.input';
import { FormationClassScalarFieldEnum } from './formation-class-scalar-field.enum';
import { FormationClassScalarWhereWithAggregatesInput } from './formation-class-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FormationClassCountAggregateInput } from './formation-class-count-aggregate.input';
import { FormationClassMinAggregateInput } from './formation-class-min-aggregate.input';
import { FormationClassMaxAggregateInput } from './formation-class-max-aggregate.input';

@ArgsType()
export class FormationClassGroupByArgs {

    @Field(() => FormationClassWhereInput, {nullable:true})
    where?: FormationClassWhereInput;

    @Field(() => [FormationClassOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FormationClassOrderByWithAggregationInput>;

    @Field(() => [FormationClassScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FormationClassScalarFieldEnum>;

    @Field(() => FormationClassScalarWhereWithAggregatesInput, {nullable:true})
    having?: FormationClassScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FormationClassCountAggregateInput, {nullable:true})
    _count?: FormationClassCountAggregateInput;

    @Field(() => FormationClassMinAggregateInput, {nullable:true})
    _min?: FormationClassMinAggregateInput;

    @Field(() => FormationClassMaxAggregateInput, {nullable:true})
    _max?: FormationClassMaxAggregateInput;
}
