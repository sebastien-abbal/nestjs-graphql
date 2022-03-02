import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GoogleCalendarItemCountAggregate } from './google-calendar-item-count-aggregate.output';
import { GoogleCalendarItemMinAggregate } from './google-calendar-item-min-aggregate.output';
import { GoogleCalendarItemMaxAggregate } from './google-calendar-item-max-aggregate.output';

@ObjectType()
export class GoogleCalendarItemGroupBy {

    @Field(() => String, {nullable:false})
    googleCalendarID!: string;

    @Field(() => String, {nullable:false})
    createdByID!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    sessionID!: string;

    @Field(() => GoogleCalendarItemCountAggregate, {nullable:true})
    _count?: GoogleCalendarItemCountAggregate;

    @Field(() => GoogleCalendarItemMinAggregate, {nullable:true})
    _min?: GoogleCalendarItemMinAggregate;

    @Field(() => GoogleCalendarItemMaxAggregate, {nullable:true})
    _max?: GoogleCalendarItemMaxAggregate;
}
