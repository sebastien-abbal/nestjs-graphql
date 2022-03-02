import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';
import { TrackOrderByWithAggregationInput } from './track-order-by-with-aggregation.input';
import { TrackScalarFieldEnum } from './track-scalar-field.enum';
import { TrackScalarWhereWithAggregatesInput } from './track-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TrackCountAggregateInput } from './track-count-aggregate.input';
import { TrackMinAggregateInput } from './track-min-aggregate.input';
import { TrackMaxAggregateInput } from './track-max-aggregate.input';

@ArgsType()
export class TrackGroupByArgs {

    @Field(() => TrackWhereInput, {nullable:true})
    where?: TrackWhereInput;

    @Field(() => [TrackOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TrackOrderByWithAggregationInput>;

    @Field(() => [TrackScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TrackScalarFieldEnum>;

    @Field(() => TrackScalarWhereWithAggregatesInput, {nullable:true})
    having?: TrackScalarWhereWithAggregatesInput;

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
