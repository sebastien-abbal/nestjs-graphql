import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FormationSessionCountAggregate } from './formation-session-count-aggregate.output';
import { FormationSessionMinAggregate } from './formation-session-min-aggregate.output';
import { FormationSessionMaxAggregate } from './formation-session-max-aggregate.output';

@ObjectType()
export class AggregateFormationSession {

    @Field(() => FormationSessionCountAggregate, {nullable:true})
    _count?: FormationSessionCountAggregate;

    @Field(() => FormationSessionMinAggregate, {nullable:true})
    _min?: FormationSessionMinAggregate;

    @Field(() => FormationSessionMaxAggregate, {nullable:true})
    _max?: FormationSessionMaxAggregate;
}
