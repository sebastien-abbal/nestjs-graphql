import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemCreateInput } from './google-calendar-item-create.input';

@ArgsType()
export class CreateOneGoogleCalendarItemArgs {

    @Field(() => GoogleCalendarItemCreateInput, {nullable:false})
    data!: GoogleCalendarItemCreateInput;
}
