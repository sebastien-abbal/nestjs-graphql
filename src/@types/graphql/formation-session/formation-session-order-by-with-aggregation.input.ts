import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { FormationSessionCountOrderByAggregateInput } from './formation-session-count-order-by-aggregate.input';
import { FormationSessionMaxOrderByAggregateInput } from './formation-session-max-order-by-aggregate.input';
import { FormationSessionMinOrderByAggregateInput } from './formation-session-min-order-by-aggregate.input';

@InputType()
export class FormationSessionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    summaryNote?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @HideField()
    isEnabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startsAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endsAt?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    formationID?: keyof typeof SortOrder;

    @HideField()
    courseID?: keyof typeof SortOrder;

    @Field(() => FormationSessionCountOrderByAggregateInput, {nullable:true})
    _count?: FormationSessionCountOrderByAggregateInput;

    @Field(() => FormationSessionMaxOrderByAggregateInput, {nullable:true})
    _max?: FormationSessionMaxOrderByAggregateInput;

    @Field(() => FormationSessionMinOrderByAggregateInput, {nullable:true})
    _min?: FormationSessionMinOrderByAggregateInput;
}
