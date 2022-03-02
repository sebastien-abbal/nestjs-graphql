import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { GoogleCalendarItemCreateInput } from './google-calendar-item-create.input';
import { GoogleCalendarItemUpdateInput } from './google-calendar-item-update.input';

@ArgsType()
export class UpsertOneGoogleCalendarItemArgs {

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:false})
    where!: GoogleCalendarItemWhereUniqueInput;

    @Field(() => GoogleCalendarItemCreateInput, {nullable:false})
    create!: GoogleCalendarItemCreateInput;

    @Field(() => GoogleCalendarItemUpdateInput, {nullable:false})
    update!: GoogleCalendarItemUpdateInput;
}
