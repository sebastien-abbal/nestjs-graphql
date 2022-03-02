import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GoogleCalendarItemMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    googleCalendarID?: true;

    @HideField()
    createdByID?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    deletedAt?: true;

    @HideField()
    sessionID?: true;
}
