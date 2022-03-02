import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryWhereInput } from './course-category-where.input';
import { CourseCategoryOrderByWithRelationInput } from './course-category-order-by-with-relation.input';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseCategoryCountAggregateInput } from './course-category-count-aggregate.input';
import { CourseCategoryMinAggregateInput } from './course-category-min-aggregate.input';
import { CourseCategoryMaxAggregateInput } from './course-category-max-aggregate.input';

@ArgsType()
export class CourseCategoryAggregateArgs {

    @Field(() => CourseCategoryWhereInput, {nullable:true})
    where?: CourseCategoryWhereInput;

    @Field(() => [CourseCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CourseCategoryOrderByWithRelationInput>;

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:true})
    cursor?: CourseCategoryWhereUniqueInput;

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
