import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';
import { TrackOrderByWithRelationInput } from './track-order-by-with-relation.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrackCountAggregateInput } from './track-count-aggregate.input';
import { TrackMinAggregateInput } from './track-min-aggregate.input';
import { TrackMaxAggregateInput } from './track-max-aggregate.input';

@ArgsType()
export class TrackAggregateArgs {

    @Field(() => TrackWhereInput, {nullable:true})
    where?: TrackWhereInput;

    @Field(() => [TrackOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TrackOrderByWithRelationInput>;

    @Field(() => TrackWhereUniqueInput, {nullable:true})
    cursor?: TrackWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TrackCountAggregateInput, {nullable:true})
    _count?: TrackCountAggregateInput;

    @Field(() => TrackMinAggregateInput, {nullable:true})
    _min?: TrackMinAggregateInput;

    @Field(() => TrackMaxAggregateInput, {nullable:true})
    _max?: TrackMaxAggregateInput;
}
