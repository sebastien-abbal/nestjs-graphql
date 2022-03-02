import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolOrderByRelationAggregateInput } from '../school/school-order-by-relation-aggregate.input';
import { CourseCategoryOrderByRelationAggregateInput } from '../course-category/course-category-order-by-relation-aggregate.input';

@InputType()
export class TrackOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isEnabled?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    schools?: SchoolOrderByRelationAggregateInput;

    @HideField()
    categories?: CourseCategoryOrderByRelationAggregateInput;
}
