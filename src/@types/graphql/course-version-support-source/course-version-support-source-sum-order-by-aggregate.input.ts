import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CourseVersionSupportSourceSumOrderByAggregateInput {

    @HideField()
    size?: keyof typeof SortOrder;

    @HideField()
    width?: keyof typeof SortOrder;

    @HideField()
    height?: keyof typeof SortOrder;
}
