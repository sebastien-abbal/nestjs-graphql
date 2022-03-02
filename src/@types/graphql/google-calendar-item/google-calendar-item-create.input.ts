import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGoogleCalendarItemsInput } from '../user/user-create-nested-one-without-google-calendar-items.input';
import { FormationSessionCreateNestedOneWithoutGoogleCalendarItemInput } from '../formation-session/formation-session-create-nested-one-without-google-calendar-item.input';

@InputType()
export class GoogleCalendarItemCreateInput {

    @HideField()
    googleCalendarID!: string;

    @HideField()
    createdBy!: UserCreateNestedOneWithoutGoogleCalendarItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session!: FormationSessionCreateNestedOneWithoutGoogleCalendarItemInput;
}
