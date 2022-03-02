import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryCreateManyInput } from './course-category-create-many.input';

@ArgsType()
export class CreateManyCourseCategoryArgs {

    @Field(() => [CourseCategoryCreateManyInput], {nullable:false})
    data!: Array<CourseCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
