import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { CourseOrderByRelationAggregateInput } from '../course/course-order-by-relation-aggregate.input';
import { TrackOrderByRelationAggregateInput } from '../track/track-order-by-relation-aggregate.input';

@InputType()
export class CourseCategoryOrderByWithRelationInput {

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

    @HideField()
    courses?: CourseOrderByRelationAggregateInput;

    @HideField()
    tracks?: TrackOrderByRelationAggregateInput;
}
