import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryUpdateManyMutationInput } from './course-category-update-many-mutation.input';
import { CourseCategoryWhereInput } from './course-category-where.input';

@ArgsType()
export class UpdateManyCourseCategoryArgs {

    @Field(() => CourseCategoryUpdateManyMutationInput, {nullable:false})
    data!: CourseCategoryUpdateManyMutationInput;

    @Field(() => CourseCategoryWhereInput, {nullable:true})
    where?: CourseCategoryWhereInput;
}
