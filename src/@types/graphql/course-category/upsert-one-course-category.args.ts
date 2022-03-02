import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryCreateInput } from './course-category-create.input';
import { CourseCategoryUpdateInput } from './course-category-update.input';

@ArgsType()
export class UpsertOneCourseCategoryArgs {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;

    @Field(() => CourseCategoryCreateInput, {nullable:false})
    create!: CourseCategoryCreateInput;

    @Field(() => CourseCategoryUpdateInput, {nullable:false})
    update!: CourseCategoryUpdateInput;
}
