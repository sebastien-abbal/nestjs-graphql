import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';

@ArgsType()
export class FindUniqueGoogleCalendarItemArgs {

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:false})
    where!: GoogleCalendarItemWhereUniqueInput;
}
