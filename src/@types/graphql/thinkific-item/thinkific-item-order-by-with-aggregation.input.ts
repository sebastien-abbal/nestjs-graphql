import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ThinkificItemCountOrderByAggregateInput } from './thinkific-item-count-order-by-aggregate.input';
import { ThinkificItemMaxOrderByAggregateInput } from './thinkific-item-max-order-by-aggregate.input';
import { ThinkificItemMinOrderByAggregateInput } from './thinkific-item-min-order-by-aggregate.input';

@InputType()
export class ThinkificItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    thinkificID?: keyof typeof SortOrder;

    @HideField()
    createdByID?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    sessionID?: keyof typeof SortOrder;

    @Field(() => ThinkificItemCountOrderByAggregateInput, {nullable:true})
    _count?: ThinkificItemCountOrderByAggregateInput;

    @Field(() => ThinkificItemMaxOrderByAggregateInput, {nullable:true})
    _max?: ThinkificItemMaxOrderByAggregateInput;

    @Field(() => ThinkificItemMinOrderByAggregateInput, {nullable:true})
    _min?: ThinkificItemMinOrderByAggregateInput;
}
