import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemUpdateManyMutationInput } from './google-calendar-item-update-many-mutation.input';
import { GoogleCalendarItemWhereInput } from './google-calendar-item-where.input';

@ArgsType()
export class UpdateManyGoogleCalendarItemArgs {

    @Field(() => GoogleCalendarItemUpdateManyMutationInput, {nullable:false})
    data!: GoogleCalendarItemUpdateManyMutationInput;

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    where?: GoogleCalendarItemWhereInput;
}
