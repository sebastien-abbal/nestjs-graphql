import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { GoogleCalendarItemUpdateWithoutCreatedByInput } from './google-calendar-item-update-without-created-by.input';

@InputType()
export class GoogleCalendarItemUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:false})
    where!: GoogleCalendarItemWhereUniqueInput;

    @Field(() => GoogleCalendarItemUpdateWithoutCreatedByInput, {nullable:false})
    data!: GoogleCalendarItemUpdateWithoutCreatedByInput;
}
