import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationSessionCreateNestedOneWithoutGoogleCalendarItemInput } from '../formation-session/formation-session-create-nested-one-without-google-calendar-item.input';

@InputType()
export class GoogleCalendarItemCreateWithoutCreatedByInput {

    @Field(() => String, {nullable:false})
    googleCalendarID!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    session!: FormationSessionCreateNestedOneWithoutGoogleCalendarItemInput;
}
