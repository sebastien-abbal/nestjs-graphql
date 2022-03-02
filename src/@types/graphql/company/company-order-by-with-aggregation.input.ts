import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { CompanyCountOrderByAggregateInput } from './company-count-order-by-aggregate.input';
import { CompanyMaxOrderByAggregateInput } from './company-max-order-by-aggregate.input';
import { CompanyMinOrderByAggregateInput } from './company-min-order-by-aggregate.input';

@InputType()
export class CompanyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @Field(() => CompanyCountOrderByAggregateInput, {nullable:true})
    _count?: CompanyCountOrderByAggregateInput;

    @Field(() => CompanyMaxOrderByAggregateInput, {nullable:true})
    _max?: CompanyMaxOrderByAggregateInput;

    @Field(() => CompanyMinOrderByAggregateInput, {nullable:true})
    _min?: CompanyMinOrderByAggregateInput;
}
