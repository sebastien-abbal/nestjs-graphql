import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TrackCountAggregate } from './track-count-aggregate.output';
import { TrackMinAggregate } from './track-min-aggregate.output';
import { TrackMaxAggregate } from './track-max-aggregate.output';

@ObjectType()
export class AggregateTrack {

    @Field(() => TrackCountAggregate, {nullable:true})
    _count?: TrackCountAggregate;

    @Field(() => TrackMinAggregate, {nullable:true})
    _min?: TrackMinAggregate;

    @Field(() => TrackMaxAggregate, {nullable:true})
    _max?: TrackMaxAggregate;
}
