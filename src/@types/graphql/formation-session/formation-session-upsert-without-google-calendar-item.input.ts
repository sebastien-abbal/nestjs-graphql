import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionUpdateWithoutGoogleCalendarItemInput } from './formation-session-update-without-google-calendar-item.input';
import { FormationSessionCreateWithoutGoogleCalendarItemInput } from './formation-session-create-without-google-calendar-item.input';

@InputType()
export class FormationSessionUpsertWithoutGoogleCalendarItemInput {

    @Field(() => FormationSessionUpdateWithoutGoogleCalendarItemInput, {nullable:false})
    update!: FormationSessionUpdateWithoutGoogleCalendarItemInput;

    @Field(() => FormationSessionCreateWithoutGoogleCalendarItemInput, {nullable:false})
    create!: FormationSessionCreateWithoutGoogleCalendarItemInput;
}
