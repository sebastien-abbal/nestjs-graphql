import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationSessionUpdateOneRequiredWithoutGoogleCalendarItemInput } from '../formation-session/formation-session-update-one-required-without-google-calendar-item.input';

@InputType()
export class GoogleCalendarItemUpdateWithoutCreatedByInput {

    @Field(() => String, {nullable:true})
    googleCalendarID?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session?: FormationSessionUpdateOneRequiredWithoutGoogleCalendarItemInput;
}
