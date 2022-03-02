import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereInput } from './google-calendar-item-where.input';

@InputType()
export class GoogleCalendarItemRelationFilter {

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    is?: GoogleCalendarItemWhereInput;

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    isNot?: GoogleCalendarItemWhereInput;
}
