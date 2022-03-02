import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryCreateWithoutCoursesInput } from './course-category-create-without-courses.input';

@InputType()
export class CourseCategoryCreateOrConnectWithoutCoursesInput {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;

    @Field(() => CourseCategoryCreateWithoutCoursesInput, {nullable:false})
    create!: CourseCategoryCreateWithoutCoursesInput;
}
