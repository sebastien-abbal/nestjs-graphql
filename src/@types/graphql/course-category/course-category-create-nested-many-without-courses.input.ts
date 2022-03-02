import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryCreateWithoutCoursesInput } from './course-category-create-without-courses.input';
import { CourseCategoryCreateOrConnectWithoutCoursesInput } from './course-category-create-or-connect-without-courses.input';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';

@InputType()
export class CourseCategoryCreateNestedManyWithoutCoursesInput {

    @Field(() => [CourseCategoryCreateWithoutCoursesInput], {nullable:true})
    create?: Array<CourseCategoryCreateWithoutCoursesInput>;

    @Field(() => [CourseCategoryCreateOrConnectWithoutCoursesInput], {nullable:true})
    connectOrCreate?: Array<CourseCategoryCreateOrConnectWithoutCoursesInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    connect?: Array<CourseCategoryWhereUniqueInput>;
}
