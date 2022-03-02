import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemWhereInput } from './thinkific-item-where.input';
import { ThinkificItemOrderByWithAggregationInput } from './thinkific-item-order-by-with-aggregation.input';
import { ThinkificItemScalarFieldEnum } from './thinkific-item-scalar-field.enum';
import { ThinkificItemScalarWhereWithAggregatesInput } from './thinkific-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ThinkificItemCountAggregateInput } from './thinkific-item-count-aggregate.input';
import { ThinkificItemMinAggregateInput } from './thinkific-item-min-aggregate.input';
import { ThinkificItemMaxAggregateInput } from './thinkific-item-max-aggregate.input';

@ArgsType()
export class ThinkificItemGroupByArgs {

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    where?: ThinkificItemWhereInput;

    @Field(() => [ThinkificItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ThinkificItemOrderByWithAggregationInput>;

    @Field(() => [ThinkificItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ThinkificItemScalarFieldEnum>;

    @Field(() => ThinkificItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: ThinkificItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ThinkificItemCountAggregateInput, {nullable:true})
    _count?: ThinkificItemCountAggregateInput;

    @Field(() => ThinkificItemMinAggregateInput, {nullable:true})
    _min?: ThinkificItemMinAggregateInput;

    @Field(() => ThinkificItemMaxAggregateInput, {nullable:true})
    _max?: ThinkificItemMaxAggregateInput;
}
