import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereInput } from './google-calendar-item-where.input';

@InputType()
export class GoogleCalendarItemListRelationFilter {

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    every?: GoogleCalendarItemWhereInput;

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    some?: GoogleCalendarItemWhereInput;

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    none?: GoogleCalendarItemWhereInput;
}
