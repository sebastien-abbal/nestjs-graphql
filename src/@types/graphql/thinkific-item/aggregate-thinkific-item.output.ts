import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ThinkificItemCountAggregate } from './thinkific-item-count-aggregate.output';
import { ThinkificItemMinAggregate } from './thinkific-item-min-aggregate.output';
import { ThinkificItemMaxAggregate } from './thinkific-item-max-aggregate.output';

@ObjectType()
export class AggregateThinkificItem {

    @Field(() => ThinkificItemCountAggregate, {nullable:true})
    _count?: ThinkificItemCountAggregate;

    @Field(() => ThinkificItemMinAggregate, {nullable:true})
    _min?: ThinkificItemMinAggregate;

    @Field(() => ThinkificItemMaxAggregate, {nullable:true})
    _max?: ThinkificItemMaxAggregate;
}
