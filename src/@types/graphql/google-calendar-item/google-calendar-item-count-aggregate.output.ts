import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class GoogleCalendarItemCountAggregate {

    @Field(() => Int, {nullable:false})
    googleCalendarID!: number;

    @Field(() => Int, {nullable:false})
    createdByID!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @HideField()
    sessionID!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
