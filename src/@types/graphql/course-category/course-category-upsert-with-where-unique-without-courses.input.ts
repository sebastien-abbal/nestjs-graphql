import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryUpdateWithoutCoursesInput } from './course-category-update-without-courses.input';
import { CourseCategoryCreateWithoutCoursesInput } from './course-category-create-without-courses.input';

@InputType()
export class CourseCategoryUpsertWithWhereUniqueWithoutCoursesInput {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;

    @Field(() => CourseCategoryUpdateWithoutCoursesInput, {nullable:false})
    update!: CourseCategoryUpdateWithoutCoursesInput;

    @Field(() => CourseCategoryCreateWithoutCoursesInput, {nullable:false})
    create!: CourseCategoryCreateWithoutCoursesInput;
}
