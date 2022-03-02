import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';
import { FormationSessionOrderByRelationAggregateInput } from '../formation-session/formation-session-order-by-relation-aggregate.input';
import { CourseOrderByWithRelationInput } from '../course/course-order-by-with-relation.input';
import { CourseVersionSupportSourceOrderByRelationAggregateInput } from '../course-version-support-source/course-version-support-source-order-by-relation-aggregate.input';

@InputType()
export class CourseVersionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    versionNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @HideField()
    validatedBy?: UserOrderByWithRelationInput;

    @HideField()
    validatedByID?: keyof typeof SortOrder;

    @HideField()
    validatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    formationSessions?: FormationSessionOrderByRelationAggregateInput;

    @HideField()
    course?: CourseOrderByWithRelationInput;

    @HideField()
    courseID?: keyof typeof SortOrder;

    @HideField()
    supports?: CourseVersionSupportSourceOrderByRelationAggregateInput;
}
