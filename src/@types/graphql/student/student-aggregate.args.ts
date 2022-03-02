import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';
import { StudentOrderByWithRelationInput } from './student-order-by-with-relation.input';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StudentCountAggregateInput } from './student-count-aggregate.input';
import { StudentMinAggregateInput } from './student-min-aggregate.input';
import { StudentMaxAggregateInput } from './student-max-aggregate.input';

@ArgsType()
export class StudentAggregateArgs {

    @Field(() => StudentWhereInput, {nullable:true})
    where?: StudentWhereInput;

    @Field(() => [StudentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentOrderByWithRelationInput>;

    @Field(() => StudentWhereUniqueInput, {nullable:true})
    cursor?: StudentWhereUniqueInput;

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
