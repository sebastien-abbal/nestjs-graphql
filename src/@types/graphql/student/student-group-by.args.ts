import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';
import { StudentOrderByWithAggregationInput } from './student-order-by-with-aggregation.input';
import { StudentScalarFieldEnum } from './student-scalar-field.enum';
import { StudentScalarWhereWithAggregatesInput } from './student-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StudentCountAggregateInput } from './student-count-aggregate.input';
import { StudentMinAggregateInput } from './student-min-aggregate.input';
import { StudentMaxAggregateInput } from './student-max-aggregate.input';

@ArgsType()
export class StudentGroupByArgs {

    @Field(() => StudentWhereInput, {nullable:true})
    where?: StudentWhereInput;

    @Field(() => [StudentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentOrderByWithAggregationInput>;

    @Field(() => [StudentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentScalarFieldEnum>;

    @Field(() => StudentScalarWhereWithAggregatesInput, {nullable:true})
    having?: StudentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StudentCountAggregateInput, {nullable:true})
    _count?: StudentCountAggregateInput;

    @Field(() => StudentMinAggregateInput, {nullable:true})
    _min?: StudentMinAggregateInput;

    @Field(() => StudentMaxAggregateInput, {nullable:true})
    _max?: StudentMaxAggregateInput;
}
