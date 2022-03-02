import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutCategoriesInput } from './course-update-without-categories.input';

@InputType()
export class CourseUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutCategoriesInput, {nullable:false})
    data!: CourseUpdateWithoutCategoriesInput;
}
