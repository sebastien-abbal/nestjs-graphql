import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryWhereInput } from './course-category-where.input';

@InputType()
export class CourseCategoryListRelationFilter {

    @Field(() => CourseCategoryWhereInput, {nullable:true})
    every?: CourseCategoryWhereInput;

    @Field(() => CourseCategoryWhereInput, {nullable:true})
    some?: CourseCategoryWhereInput;

    @Field(() => CourseCategoryWhereInput, {nullable:true})
    none?: CourseCategoryWhereInput;
}
