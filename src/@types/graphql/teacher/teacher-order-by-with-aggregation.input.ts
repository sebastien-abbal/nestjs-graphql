import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { TeacherCountOrderByAggregateInput } from './teacher-count-order-by-aggregate.input';
import { TeacherMaxOrderByAggregateInput } from './teacher-max-order-by-aggregate.input';
import { TeacherMinOrderByAggregateInput } from './teacher-min-order-by-aggregate.input';

@InputType()
export class TeacherOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    isConfirmed?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    userID?: keyof typeof SortOrder;

    @Field(() => TeacherCountOrderByAggregateInput, {nullable:true})
    _count?: TeacherCountOrderByAggregateInput;

    @Field(() => TeacherMaxOrderByAggregateInput, {nullable:true})
    _max?: TeacherMaxOrderByAggregateInput;

    @Field(() => TeacherMinOrderByAggregateInput, {nullable:true})
    _min?: TeacherMinOrderByAggregateInput;
}
