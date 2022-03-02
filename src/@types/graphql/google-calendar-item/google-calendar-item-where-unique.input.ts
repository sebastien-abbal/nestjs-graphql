import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GoogleCalendarItemWhereUniqueInput {

    @Field(() => String, {nullable:true})
    googleCalendarID?: string;

    @HideField()
    sessionID?: string;
}
