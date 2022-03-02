import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryCreateInput } from './course-category-create.input';

@ArgsType()
export class CreateOneCourseCategoryArgs {

    @Field(() => CourseCategoryCreateInput, {nullable:false})
    data!: CourseCategoryCreateInput;
}
