import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemScalarWhereInput } from './google-calendar-item-scalar-where.input';
import { GoogleCalendarItemUpdateManyMutationInput } from './google-calendar-item-update-many-mutation.input';

@InputType()
export class GoogleCalendarItemUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => GoogleCalendarItemScalarWhereInput, {nullable:false})
    where!: GoogleCalendarItemScalarWhereInput;

    @Field(() => GoogleCalendarItemUpdateManyMutationInput, {nullable:false})
    data!: GoogleCalendarItemUpdateManyMutationInput;
}
