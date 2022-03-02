import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FormationClassCountAggregate } from './formation-class-count-aggregate.output';
import { FormationClassMinAggregate } from './formation-class-min-aggregate.output';
import { FormationClassMaxAggregate } from './formation-class-max-aggregate.output';

@ObjectType()
export class AggregateFormationClass {

    @Field(() => FormationClassCountAggregate, {nullable:true})
    _count?: FormationClassCountAggregate;

    @Field(() => FormationClassMinAggregate, {nullable:true})
    _min?: FormationClassMinAggregate;

    @Field(() => FormationClassMaxAggregate, {nullable:true})
    _max?: FormationClassMaxAggregate;
}
