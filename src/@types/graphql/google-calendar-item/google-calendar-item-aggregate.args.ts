import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereInput } from './google-calendar-item-where.input';
import { GoogleCalendarItemOrderByWithRelationInput } from './google-calendar-item-order-by-with-relation.input';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GoogleCalendarItemCountAggregateInput } from './google-calendar-item-count-aggregate.input';
import { GoogleCalendarItemMinAggregateInput } from './google-calendar-item-min-aggregate.input';
import { GoogleCalendarItemMaxAggregateInput } from './google-calendar-item-max-aggregate.input';

@ArgsType()
export class GoogleCalendarItemAggregateArgs {

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    where?: GoogleCalendarItemWhereInput;

    @Field(() => [GoogleCalendarItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GoogleCalendarItemOrderByWithRelationInput>;

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:true})
    cursor?: GoogleCalendarItemWhereUniqueInput;

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
