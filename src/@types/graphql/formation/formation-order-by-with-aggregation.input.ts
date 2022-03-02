import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { FormationCountOrderByAggregateInput } from './formation-count-order-by-aggregate.input';
import { FormationMaxOrderByAggregateInput } from './formation-max-order-by-aggregate.input';
import { FormationMinOrderByAggregateInput } from './formation-min-order-by-aggregate.input';

@InputType()
export class FormationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeFormat?: keyof typeof SortOrder;

    @HideField()
    isEnabled?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    headMasterID?: keyof typeof SortOrder;

    @HideField()
    companyID?: keyof typeof SortOrder;

    @Field(() => FormationCountOrderByAggregateInput, {nullable:true})
    _count?: FormationCountOrderByAggregateInput;

    @Field(() => FormationMaxOrderByAggregateInput, {nullable:true})
    _max?: FormationMaxOrderByAggregateInput;

    @Field(() => FormationMinOrderByAggregateInput, {nullable:true})
    _min?: FormationMinOrderByAggregateInput;
}
