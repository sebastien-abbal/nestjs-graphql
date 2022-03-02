import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class GoogleCalendarItemMaxAggregate {

    @Field(() => String, {nullable:true})
    googleCalendarID?: string;

    @Field(() => String, {nullable:true})
    createdByID?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    sessionID?: string;
}
