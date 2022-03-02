import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ThinkificItemCountAggregate } from './thinkific-item-count-aggregate.output';
import { ThinkificItemMinAggregate } from './thinkific-item-min-aggregate.output';
import { ThinkificItemMaxAggregate } from './thinkific-item-max-aggregate.output';

@ObjectType()
export class ThinkificItemGroupBy {

    @Field(() => String, {nullable:false})
    thinkificID!: string;

    @Field(() => String, {nullable:false})
    createdByID!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    sessionID!: string;

    @Field(() => ThinkificItemCountAggregate, {nullable:true})
    _count?: ThinkificItemCountAggregate;

    @Field(() => ThinkificItemMinAggregate, {nullable:true})
    _min?: ThinkificItemMinAggregate;

    @Field(() => ThinkificItemMaxAggregate, {nullable:true})
    _max?: ThinkificItemMaxAggregate;
}
