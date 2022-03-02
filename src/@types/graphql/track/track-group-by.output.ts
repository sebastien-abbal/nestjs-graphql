import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TrackCountAggregate } from './track-count-aggregate.output';
import { TrackMinAggregate } from './track-min-aggregate.output';
import { TrackMaxAggregate } from './track-max-aggregate.output';

@ObjectType()
export class TrackGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => TrackCountAggregate, {nullable:true})
    _count?: TrackCountAggregate;

    @Field(() => TrackMinAggregate, {nullable:true})
    _min?: TrackMinAggregate;

    @Field(() => TrackMaxAggregate, {nullable:true})
    _max?: TrackMaxAggregate;
}
