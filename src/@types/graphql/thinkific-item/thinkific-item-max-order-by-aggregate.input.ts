import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ThinkificItemMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    thinkificID?: keyof typeof SortOrder;

    @HideField()
    createdByID?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    sessionID?: keyof typeof SortOrder;
}
