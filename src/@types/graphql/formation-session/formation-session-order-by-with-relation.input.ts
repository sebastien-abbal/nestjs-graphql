import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { FormationOrderByWithRelationInput } from '../formation/formation-order-by-with-relation.input';
import { CourseVersionOrderByWithRelationInput } from '../course-version/course-version-order-by-with-relation.input';
import { ThinkificItemOrderByRelationAggregateInput } from '../thinkific-item/thinkific-item-order-by-relation-aggregate.input';
import { GoogleCalendarItemOrderByWithRelationInput } from '../google-calendar-item/google-calendar-item-order-by-with-relation.input';

@InputType()
export class FormationSessionOrderByWithRelationInput {

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
    formation?: FormationOrderByWithRelationInput;

    @HideField()
    formationID?: keyof typeof SortOrder;

    @HideField()
    course?: CourseVersionOrderByWithRelationInput;

    @HideField()
    courseID?: keyof typeof SortOrder;

    @HideField()
    thinkificItems?: ThinkificItemOrderByRelationAggregateInput;

    @HideField()
    googleCalendarItem?: GoogleCalendarItemOrderByWithRelationInput;
}
