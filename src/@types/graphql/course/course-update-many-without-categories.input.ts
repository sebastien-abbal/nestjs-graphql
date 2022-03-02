import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutCategoriesInput } from './course-create-without-categories.input';
import { CourseCreateOrConnectWithoutCategoriesInput } from './course-create-or-connect-without-categories.input';
import { CourseUpsertWithWhereUniqueWithoutCategoriesInput } from './course-upsert-with-where-unique-without-categories.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithWhereUniqueWithoutCategoriesInput } from './course-update-with-where-unique-without-categories.input';
import { CourseUpdateManyWithWhereWithoutCategoriesInput } from './course-update-many-with-where-without-categories.input';
import { CourseScalarWhereInput } from './course-scalar-where.input';

@InputType()
export class CourseUpdateManyWithoutCategoriesInput {

    @Field(() => [CourseCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<CourseCreateWithoutCategoriesInput>;

    @Field(() => [CourseCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<CourseCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [CourseUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    set?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    delete?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    connect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    update?: Array<CourseUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [CourseUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    updateMany?: Array<CourseUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseScalarWhereInput>;
}
