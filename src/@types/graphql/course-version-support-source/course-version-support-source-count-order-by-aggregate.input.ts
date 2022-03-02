import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CourseVersionSupportSourceCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    provider?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @HideField()
    size?: keyof typeof SortOrder;

    @HideField()
    width?: keyof typeof SortOrder;

    @HideField()
    height?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    fileToDeleteAt?: keyof typeof SortOrder;

    @HideField()
    userID?: keyof typeof SortOrder;

    @HideField()
    courseID?: keyof typeof SortOrder;
}
