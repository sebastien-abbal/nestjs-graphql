import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateWithoutCategoriesInput } from './course-create-without-categories.input';

@InputType()
export class CourseCreateOrConnectWithoutCategoriesInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutCategoriesInput, {nullable:false})
    create!: CourseCreateWithoutCategoriesInput;
}
