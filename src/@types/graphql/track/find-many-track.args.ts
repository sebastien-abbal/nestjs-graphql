import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';
import { TrackOrderByWithRelationInput } from './track-order-by-with-relation.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrackScalarFieldEnum } from './track-scalar-field.enum';

@ArgsType()
export class FindManyTrackArgs {

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

    @Field(() => [TrackScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TrackScalarFieldEnum>;
}
