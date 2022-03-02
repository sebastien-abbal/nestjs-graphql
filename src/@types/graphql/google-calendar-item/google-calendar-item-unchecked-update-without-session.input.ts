import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GoogleCalendarItemUncheckedUpdateWithoutSessionInput {

    @Field(() => String, {nullable:true})
    googleCalendarID?: string;

    @HideField()
    createdByID?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;
}
