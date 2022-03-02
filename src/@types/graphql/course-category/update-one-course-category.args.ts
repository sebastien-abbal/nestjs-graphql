import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryUpdateInput } from './course-category-update.input';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';

@ArgsType()
export class UpdateOneCourseCategoryArgs {

    @Field(() => CourseCategoryUpdateInput, {nullable:false})
    data!: CourseCategoryUpdateInput;

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;
}
