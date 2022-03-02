import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemWhereInput } from './thinkific-item-where.input';
import { ThinkificItemOrderByWithRelationInput } from './thinkific-item-order-by-with-relation.input';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThinkificItemCountAggregateInput } from './thinkific-item-count-aggregate.input';
import { ThinkificItemMinAggregateInput } from './thinkific-item-min-aggregate.input';
import { ThinkificItemMaxAggregateInput } from './thinkific-item-max-aggregate.input';

@ArgsType()
export class ThinkificItemAggregateArgs {

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    where?: ThinkificItemWhereInput;

    @Field(() => [ThinkificItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ThinkificItemOrderByWithRelationInput>;

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:true})
    cursor?: ThinkificItemWhereUniqueInput;

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
