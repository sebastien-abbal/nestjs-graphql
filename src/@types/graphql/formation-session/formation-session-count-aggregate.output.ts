import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class FormationSessionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    summaryNote!: number;

    @Field(() => Int, {nullable:false})
    format!: number;

    @Field(() => Int, {nullable:false})
    isEnabled!: number;

    @Field(() => Int, {nullable:false})
    startsAt!: number;

    @Field(() => Int, {nullable:false})
    endsAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @HideField()
    formationID!: number;

    @HideField()
    courseID!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
