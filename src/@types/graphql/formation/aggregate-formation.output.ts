import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FormationCountAggregate } from './formation-count-aggregate.output';
import { FormationMinAggregate } from './formation-min-aggregate.output';
import { FormationMaxAggregate } from './formation-max-aggregate.output';

@ObjectType()
export class AggregateFormation {

    @Field(() => FormationCountAggregate, {nullable:true})
    _count?: FormationCountAggregate;

    @Field(() => FormationMinAggregate, {nullable:true})
    _min?: FormationMinAggregate;

    @Field(() => FormationMaxAggregate, {nullable:true})
    _max?: FormationMaxAggregate;
}
