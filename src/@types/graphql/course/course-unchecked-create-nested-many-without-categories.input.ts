import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutCategoriesInput } from './course-create-without-categories.input';
import { CourseCreateOrConnectWithoutCategoriesInput } from './course-create-or-connect-without-categories.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [CourseCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<CourseCreateWithoutCategoriesInput>;

    @Field(() => [CourseCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<CourseCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    connect?: Array<CourseWhereUniqueInput>;
}
