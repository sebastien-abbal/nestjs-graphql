import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereInput } from './school-logo-picture-where.input';
import { SchoolLogoPictureOrderByWithAggregationInput } from './school-logo-picture-order-by-with-aggregation.input';
import { SchoolLogoPictureScalarFieldEnum } from './school-logo-picture-scalar-field.enum';
import { SchoolLogoPictureScalarWhereWithAggregatesInput } from './school-logo-picture-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SchoolLogoPictureCountAggregateInput } from './school-logo-picture-count-aggregate.input';
import { SchoolLogoPictureAvgAggregateInput } from './school-logo-picture-avg-aggregate.input';
import { SchoolLogoPictureSumAggregateInput } from './school-logo-picture-sum-aggregate.input';
import { SchoolLogoPictureMinAggregateInput } from './school-logo-picture-min-aggregate.input';
import { SchoolLogoPictureMaxAggregateInput } from './school-logo-picture-max-aggregate.input';

@ArgsType()
export class SchoolLogoPictureGroupByArgs {

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    where?: SchoolLogoPictureWhereInput;

    @Field(() => [SchoolLogoPictureOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SchoolLogoPictureOrderByWithAggregationInput>;

    @Field(() => [SchoolLogoPictureScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SchoolLogoPictureScalarFieldEnum>;

    @Field(() => SchoolLogoPictureScalarWhereWithAggregatesInput, {nullable:true})
    having?: SchoolLogoPictureScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SchoolLogoPictureCountAggregateInput, {nullable:true})
    _count?: SchoolLogoPictureCountAggregateInput;

    @Field(() => SchoolLogoPictureAvgAggregateInput, {nullable:true})
    _avg?: SchoolLogoPictureAvgAggregateInput;

    @Field(() => SchoolLogoPictureSumAggregateInput, {nullable:true})
    _sum?: SchoolLogoPictureSumAggregateInput;

    @Field(() => SchoolLogoPictureMinAggregateInput, {nullable:true})
    _min?: SchoolLogoPictureMinAggregateInput;

    @Field(() => SchoolLogoPictureMaxAggregateInput, {nullable:true})
    _max?: SchoolLogoPictureMaxAggregateInput;
}
