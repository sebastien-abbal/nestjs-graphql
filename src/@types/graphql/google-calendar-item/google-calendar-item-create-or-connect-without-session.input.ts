import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { GoogleCalendarItemCreateWithoutSessionInput } from './google-calendar-item-create-without-session.input';

@InputType()
export class GoogleCalendarItemCreateOrConnectWithoutSessionInput {

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:false})
    where!: GoogleCalendarItemWhereUniqueInput;

    @Field(() => GoogleCalendarItemCreateWithoutSessionInput, {nullable:false})
    create!: GoogleCalendarItemCreateWithoutSessionInput;
}
