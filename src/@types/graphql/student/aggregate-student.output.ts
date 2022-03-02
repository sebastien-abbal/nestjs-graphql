import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StudentCountAggregate } from './student-count-aggregate.output';
import { StudentMinAggregate } from './student-min-aggregate.output';
import { StudentMaxAggregate } from './student-max-aggregate.output';

@ObjectType()
export class AggregateStudent {

    @Field(() => StudentCountAggregate, {nullable:true})
    _count?: StudentCountAggregate;

    @Field(() => StudentMinAggregate, {nullable:true})
    _min?: StudentMinAggregate;

    @Field(() => StudentMaxAggregate, {nullable:true})
    _max?: StudentMaxAggregate;
}
