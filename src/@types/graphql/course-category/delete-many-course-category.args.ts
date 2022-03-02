import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCategoryWhereInput } from './course-category-where.input';

@ArgsType()
export class DeleteManyCourseCategoryArgs {

    @Field(() => CourseCategoryWhereInput, {nullable:true})
    where?: CourseCategoryWhereInput;
}
