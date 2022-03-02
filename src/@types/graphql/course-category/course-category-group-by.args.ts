import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryWhereInput } from './course-category-where.input';
import { CourseCategoryOrderByWithAggregationInput } from './course-category-order-by-with-aggregation.input';
import { CourseCategoryScalarFieldEnum } from './course-category-scalar-field.enum';
import { CourseCategoryScalarWhereWithAggregatesInput } from './course-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CourseCategoryCountAggregateInput } from './course-category-count-aggregate.input';
import { CourseCategoryMinAggregateInput } from './course-category-min-aggregate.input';
import { CourseCategoryMaxAggregateInput } from './course-category-max-aggregate.input';

@ArgsType()
export class CourseCategoryGroupByArgs {

    @Field(() => CourseCategoryWhereInput, {nullable:true})
    where?: CourseCategoryWhereInput;

    @Field(() => [CourseCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CourseCategoryOrderByWithAggregationInput>;

    @Field(() => [CourseCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CourseCategoryScalarFieldEnum>;

    @Field(() => CourseCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: CourseCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CourseCategoryCountAggregateInput, {nullable:true})
    _count?: CourseCategoryCountAggregateInput;

    @Field(() => CourseCategoryMinAggregateInput, {nullable:true})
    _min?: CourseCategoryMinAggregateInput;

    @Field(() => CourseCategoryMaxAggregateInput, {nullable:true})
    _max?: CourseCategoryMaxAggregateInput;
}
