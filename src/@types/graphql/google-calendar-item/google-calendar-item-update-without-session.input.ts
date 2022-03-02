import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutGoogleCalendarItemsInput } from '../user/user-update-one-required-without-google-calendar-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GoogleCalendarItemUpdateWithoutSessionInput {

    @Field(() => String, {nullable:true})
    googleCalendarID?: string;

    @HideField()
    createdBy?: UserUpdateOneRequiredWithoutGoogleCalendarItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;
}
