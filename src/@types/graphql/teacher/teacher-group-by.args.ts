import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherWhereInput } from './teacher-where.input';
import { TeacherOrderByWithAggregationInput } from './teacher-order-by-with-aggregation.input';
import { TeacherScalarFieldEnum } from './teacher-scalar-field.enum';
import { TeacherScalarWhereWithAggregatesInput } from './teacher-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TeacherCountAggregateInput } from './teacher-count-aggregate.input';
import { TeacherMinAggregateInput } from './teacher-min-aggregate.input';
import { TeacherMaxAggregateInput } from './teacher-max-aggregate.input';

@ArgsType()
export class TeacherGroupByArgs {

    @Field(() => TeacherWhereInput, {nullable:true})
    where?: TeacherWhereInput;

    @Field(() => [TeacherOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TeacherOrderByWithAggregationInput>;

    @Field(() => [TeacherScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TeacherScalarFieldEnum>;

    @Field(() => TeacherScalarWhereWithAggregatesInput, {nullable:true})
    having?: TeacherScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TeacherCountAggregateInput, {nullable:true})
    _count?: TeacherCountAggregateInput;

    @Field(() => TeacherMinAggregateInput, {nullable:true})
    _min?: TeacherMinAggregateInput;

    @Field(() => TeacherMaxAggregateInput, {nullable:true})
    _max?: TeacherMaxAggregateInput;
}
