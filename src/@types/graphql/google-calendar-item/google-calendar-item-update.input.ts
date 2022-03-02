import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutGoogleCalendarItemsInput } from '../user/user-update-one-required-without-google-calendar-items.input';
import { FormationSessionUpdateOneRequiredWithoutGoogleCalendarItemInput } from '../formation-session/formation-session-update-one-required-without-google-calendar-item.input';

@InputType()
export class GoogleCalendarItemUpdateInput {

    @HideField()
    googleCalendarID?: string;

    @HideField()
    createdBy?: UserUpdateOneRequiredWithoutGoogleCalendarItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session?: FormationSessionUpdateOneRequiredWithoutGoogleCalendarItemInput;
}
