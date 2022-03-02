import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereInput } from './google-calendar-item-where.input';
import { GoogleCalendarItemOrderByWithAggregationInput } from './google-calendar-item-order-by-with-aggregation.input';
import { GoogleCalendarItemScalarFieldEnum } from './google-calendar-item-scalar-field.enum';
import { GoogleCalendarItemScalarWhereWithAggregatesInput } from './google-calendar-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GoogleCalendarItemCountAggregateInput } from './google-calendar-item-count-aggregate.input';
import { GoogleCalendarItemMinAggregateInput } from './google-calendar-item-min-aggregate.input';
import { GoogleCalendarItemMaxAggregateInput } from './google-calendar-item-max-aggregate.input';

@ArgsType()
export class GoogleCalendarItemGroupByArgs {

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    where?: GoogleCalendarItemWhereInput;

    @Field(() => [GoogleCalendarItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GoogleCalendarItemOrderByWithAggregationInput>;

    @Field(() => [GoogleCalendarItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GoogleCalendarItemScalarFieldEnum>;

    @Field(() => GoogleCalendarItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: GoogleCalendarItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GoogleCalendarItemCountAggregateInput, {nullable:true})
    _count?: GoogleCalendarItemCountAggregateInput;

    @Field(() => GoogleCalendarItemMinAggregateInput, {nullable:true})
    _min?: GoogleCalendarItemMinAggregateInput;

    @Field(() => GoogleCalendarItemMaxAggregateInput, {nullable:true})
    _max?: GoogleCalendarItemMaxAggregateInput;
}
