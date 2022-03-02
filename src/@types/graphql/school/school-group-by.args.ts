import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { SchoolOrderByWithAggregationInput } from './school-order-by-with-aggregation.input';
import { SchoolScalarFieldEnum } from './school-scalar-field.enum';
import { SchoolScalarWhereWithAggregatesInput } from './school-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SchoolCountAggregateInput } from './school-count-aggregate.input';
import { SchoolMinAggregateInput } from './school-min-aggregate.input';
import { SchoolMaxAggregateInput } from './school-max-aggregate.input';

@ArgsType()
export class SchoolGroupByArgs {

    @Field(() => SchoolWhereInput, {nullable:true})
    where?: SchoolWhereInput;

    @Field(() => [SchoolOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SchoolOrderByWithAggregationInput>;

    @Field(() => [SchoolScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SchoolScalarFieldEnum>;

    @Field(() => SchoolScalarWhereWithAggregatesInput, {nullable:true})
    having?: SchoolScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SchoolCountAggregateInput, {nullable:true})
    _count?: SchoolCountAggregateInput;

    @Field(() => SchoolMinAggregateInput, {nullable:true})
    _min?: SchoolMinAggregateInput;

    @Field(() => SchoolMaxAggregateInput, {nullable:true})
    _max?: SchoolMaxAggregateInput;
}
