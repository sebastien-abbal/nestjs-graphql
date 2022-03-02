import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { FormationClassCountOrderByAggregateInput } from './formation-class-count-order-by-aggregate.input';
import { FormationClassMaxOrderByAggregateInput } from './formation-class-max-order-by-aggregate.input';
import { FormationClassMinOrderByAggregateInput } from './formation-class-min-order-by-aggregate.input';

@InputType()
export class FormationClassOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    isEnabled?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    formationID?: keyof typeof SortOrder;

    @Field(() => FormationClassCountOrderByAggregateInput, {nullable:true})
    _count?: FormationClassCountOrderByAggregateInput;

    @Field(() => FormationClassMaxOrderByAggregateInput, {nullable:true})
    _max?: FormationClassMaxOrderByAggregateInput;

    @Field(() => FormationClassMinOrderByAggregateInput, {nullable:true})
    _min?: FormationClassMinOrderByAggregateInput;
}
