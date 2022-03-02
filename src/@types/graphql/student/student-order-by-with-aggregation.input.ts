import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { StudentCountOrderByAggregateInput } from './student-count-order-by-aggregate.input';
import { StudentMaxOrderByAggregateInput } from './student-max-order-by-aggregate.input';
import { StudentMinOrderByAggregateInput } from './student-min-order-by-aggregate.input';

@InputType()
export class StudentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    userID?: keyof typeof SortOrder;

    @Field(() => StudentCountOrderByAggregateInput, {nullable:true})
    _count?: StudentCountOrderByAggregateInput;

    @Field(() => StudentMaxOrderByAggregateInput, {nullable:true})
    _max?: StudentMaxOrderByAggregateInput;

    @Field(() => StudentMinOrderByAggregateInput, {nullable:true})
    _min?: StudentMinOrderByAggregateInput;
}
