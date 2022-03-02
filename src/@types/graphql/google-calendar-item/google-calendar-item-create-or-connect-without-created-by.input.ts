import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { GoogleCalendarItemCreateWithoutCreatedByInput } from './google-calendar-item-create-without-created-by.input';

@InputType()
export class GoogleCalendarItemCreateOrConnectWithoutCreatedByInput {

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:false})
    where!: GoogleCalendarItemWhereUniqueInput;

    @Field(() => GoogleCalendarItemCreateWithoutCreatedByInput, {nullable:false})
    create!: GoogleCalendarItemCreateWithoutCreatedByInput;
}
