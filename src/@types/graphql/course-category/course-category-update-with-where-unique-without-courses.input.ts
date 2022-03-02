import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryUpdateWithoutCoursesInput } from './course-category-update-without-courses.input';

@InputType()
export class CourseCategoryUpdateWithWhereUniqueWithoutCoursesInput {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;

    @Field(() => CourseCategoryUpdateWithoutCoursesInput, {nullable:false})
    data!: CourseCategoryUpdateWithoutCoursesInput;
}
