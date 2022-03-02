import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { FormationOrderByWithRelationInput } from '../formation/formation-order-by-with-relation.input';
import { StudentOrderByRelationAggregateInput } from '../student/student-order-by-relation-aggregate.input';
import { TeacherOrderByRelationAggregateInput } from '../teacher/teacher-order-by-relation-aggregate.input';

@InputType()
export class FormationClassOrderByWithRelationInput {

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
    formation?: FormationOrderByWithRelationInput;

    @HideField()
    formationID?: keyof typeof SortOrder;

    @HideField()
    students?: StudentOrderByRelationAggregateInput;

    @HideField()
    teachers?: TeacherOrderByRelationAggregateInput;
}
