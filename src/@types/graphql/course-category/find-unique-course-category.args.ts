import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';

@ArgsType()
export class FindUniqueCourseCategoryArgs {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;
}
