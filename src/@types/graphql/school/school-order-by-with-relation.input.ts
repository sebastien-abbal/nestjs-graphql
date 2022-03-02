import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolLogoPictureOrderByRelationAggregateInput } from '../school-logo-picture/school-logo-picture-order-by-relation-aggregate.input';
import { TrackOrderByRelationAggregateInput } from '../track/track-order-by-relation-aggregate.input';
import { FormationOrderByRelationAggregateInput } from '../formation/formation-order-by-relation-aggregate.input';

@InputType()
export class SchoolOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isEnabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    websiteUrl?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    logoPictures?: SchoolLogoPictureOrderByRelationAggregateInput;

    @HideField()
    tracks?: TrackOrderByRelationAggregateInput;

    @HideField()
    formations?: FormationOrderByRelationAggregateInput;
}
