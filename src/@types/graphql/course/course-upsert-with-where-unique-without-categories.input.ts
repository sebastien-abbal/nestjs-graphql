import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutCategoriesInput } from './course-update-without-categories.input';
import { CourseCreateWithoutCategoriesInput } from './course-create-without-categories.input';

@InputType()
export class CourseUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutCategoriesInput, {nullable:false})
    update!: CourseUpdateWithoutCategoriesInput;

    @Field(() => CourseCreateWithoutCategoriesInput, {nullable:false})
    create!: CourseCreateWithoutCategoriesInput;
}
