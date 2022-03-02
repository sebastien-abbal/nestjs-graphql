import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryScalarWhereInput } from './course-category-scalar-where.input';
import { CourseCategoryUpdateManyMutationInput } from './course-category-update-many-mutation.input';

@InputType()
export class CourseCategoryUpdateManyWithWhereWithoutTracksInput {

    @Field(() => CourseCategoryScalarWhereInput, {nullable:false})
    where!: CourseCategoryScalarWhereInput;

    @Field(() => CourseCategoryUpdateManyMutationInput, {nullable:false})
    data!: CourseCategoryUpdateManyMutationInput;
}
