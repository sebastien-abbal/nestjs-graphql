import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { TrackCountOrderByAggregateInput } from './track-count-order-by-aggregate.input';
import { TrackMaxOrderByAggregateInput } from './track-max-order-by-aggregate.input';
import { TrackMinOrderByAggregateInput } from './track-min-order-by-aggregate.input';

@InputType()
export class TrackOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isEnabled?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @Field(() => TrackCountOrderByAggregateInput, {nullable:true})
    _count?: TrackCountOrderByAggregateInput;

    @Field(() => TrackMaxOrderByAggregateInput, {nullable:true})
    _max?: TrackMaxOrderByAggregateInput;

    @Field(() => TrackMinOrderByAggregateInput, {nullable:true})
    _min?: TrackMinOrderByAggregateInput;
}
