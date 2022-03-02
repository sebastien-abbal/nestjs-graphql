import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryWhereInput } from './course-category-where.input';
import { CourseCategoryOrderByWithRelationInput } from './course-category-order-by-with-relation.input';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseCategoryScalarFieldEnum } from './course-category-scalar-field.enum';

@ArgsType()
export class FindFirstCourseCategoryArgs {

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

    @Field(() => [CourseCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CourseCategoryScalarFieldEnum>;
}
