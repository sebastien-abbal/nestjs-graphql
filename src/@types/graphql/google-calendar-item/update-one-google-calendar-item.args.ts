import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemUpdateInput } from './google-calendar-item-update.input';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';

@ArgsType()
export class UpdateOneGoogleCalendarItemArgs {

    @Field(() => GoogleCalendarItemUpdateInput, {nullable:false})
    data!: GoogleCalendarItemUpdateInput;

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:false})
    where!: GoogleCalendarItemWhereUniqueInput;
}
