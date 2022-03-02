import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { GoogleCalendarItemCountOrderByAggregateInput } from './google-calendar-item-count-order-by-aggregate.input';
import { GoogleCalendarItemMaxOrderByAggregateInput } from './google-calendar-item-max-order-by-aggregate.input';
import { GoogleCalendarItemMinOrderByAggregateInput } from './google-calendar-item-min-order-by-aggregate.input';

@InputType()
export class GoogleCalendarItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    googleCalendarID?: keyof typeof SortOrder;

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

    @Field(() => GoogleCalendarItemCountOrderByAggregateInput, {nullable:true})
    _count?: GoogleCalendarItemCountOrderByAggregateInput;

    @Field(() => GoogleCalendarItemMaxOrderByAggregateInput, {nullable:true})
    _max?: GoogleCalendarItemMaxOrderByAggregateInput;

    @Field(() => GoogleCalendarItemMinOrderByAggregateInput, {nullable:true})
    _min?: GoogleCalendarItemMinOrderByAggregateInput;
}
