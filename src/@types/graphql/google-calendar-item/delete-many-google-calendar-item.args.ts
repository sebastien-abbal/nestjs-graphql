import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereInput } from './google-calendar-item-where.input';

@ArgsType()
export class DeleteManyGoogleCalendarItemArgs {

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    where?: GoogleCalendarItemWhereInput;
}
