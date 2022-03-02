import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemUpdateWithoutSessionInput } from './google-calendar-item-update-without-session.input';
import { GoogleCalendarItemCreateWithoutSessionInput } from './google-calendar-item-create-without-session.input';

@InputType()
export class GoogleCalendarItemUpsertWithoutSessionInput {

    @Field(() => GoogleCalendarItemUpdateWithoutSessionInput, {nullable:false})
    update!: GoogleCalendarItemUpdateWithoutSessionInput;

    @Field(() => GoogleCalendarItemCreateWithoutSessionInput, {nullable:false})
    create!: GoogleCalendarItemCreateWithoutSessionInput;
}
