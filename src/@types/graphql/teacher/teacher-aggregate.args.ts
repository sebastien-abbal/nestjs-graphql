import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherWhereInput } from './teacher-where.input';
import { TeacherOrderByWithRelationInput } from './teacher-order-by-with-relation.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TeacherCountAggregateInput } from './teacher-count-aggregate.input';
import { TeacherMinAggregateInput } from './teacher-min-aggregate.input';
import { TeacherMaxAggregateInput } from './teacher-max-aggregate.input';

@ArgsType()
export class TeacherAggregateArgs {

    @Field(() => TeacherWhereInput, {nullable:true})
    where?: TeacherWhereInput;

    @Field(() => [TeacherOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeacherOrderByWithRelationInput>;

    @Field(() => TeacherWhereUniqueInput, {nullable:true})
    cursor?: TeacherWhereUniqueInput;

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
