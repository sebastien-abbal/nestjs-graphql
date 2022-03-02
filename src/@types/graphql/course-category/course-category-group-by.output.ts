import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CourseCategoryCountAggregate } from './course-category-count-aggregate.output';
import { CourseCategoryMinAggregate } from './course-category-min-aggregate.output';
import { CourseCategoryMaxAggregate } from './course-category-max-aggregate.output';

@ObjectType()
export class CourseCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => CourseCategoryCountAggregate, {nullable:true})
    _count?: CourseCategoryCountAggregate;

    @Field(() => CourseCategoryMinAggregate, {nullable:true})
    _min?: CourseCategoryMinAggregate;

    @Field(() => CourseCategoryMaxAggregate, {nullable:true})
    _max?: CourseCategoryMaxAggregate;
}
