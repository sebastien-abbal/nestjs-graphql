import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FormationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    format!: number;

    @Field(() => Int, {nullable:false})
    timeFormat!: number;

    @Field(() => Int, {nullable:false})
    isEnabled!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    headMasterID!: number;

    @Field(() => Int, {nullable:false})
    companyID!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
