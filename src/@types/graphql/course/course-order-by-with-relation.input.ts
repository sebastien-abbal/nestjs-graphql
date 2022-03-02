import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { TeacherOrderByWithRelationInput } from '../teacher/teacher-order-by-with-relation.input';
import { CourseVersionOrderByRelationAggregateInput } from '../course-version/course-version-order-by-relation-aggregate.input';
import { CourseCategoryOrderByRelationAggregateInput } from '../course-category/course-category-order-by-relation-aggregate.input';

@InputType()
export class CourseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    teacher?: TeacherOrderByWithRelationInput;

    @HideField()
    teacherID?: keyof typeof SortOrder;

    @HideField()
    versions?: CourseVersionOrderByRelationAggregateInput;

    @HideField()
    categories?: CourseCategoryOrderByRelationAggregateInput;
}
