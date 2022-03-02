import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryCreateWithoutCoursesInput } from './course-category-create-without-courses.input';
import { CourseCategoryCreateOrConnectWithoutCoursesInput } from './course-category-create-or-connect-without-courses.input';
import { CourseCategoryUpsertWithWhereUniqueWithoutCoursesInput } from './course-category-upsert-with-where-unique-without-courses.input';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryUpdateWithWhereUniqueWithoutCoursesInput } from './course-category-update-with-where-unique-without-courses.input';
import { CourseCategoryUpdateManyWithWhereWithoutCoursesInput } from './course-category-update-many-with-where-without-courses.input';
import { CourseCategoryScalarWhereInput } from './course-category-scalar-where.input';

@InputType()
export class CourseCategoryUncheckedUpdateManyWithoutCoursesInput {

    @Field(() => [CourseCategoryCreateWithoutCoursesInput], {nullable:true})
    create?: Array<CourseCategoryCreateWithoutCoursesInput>;

    @Field(() => [CourseCategoryCreateOrConnectWithoutCoursesInput], {nullable:true})
    connectOrCreate?: Array<CourseCategoryCreateOrConnectWithoutCoursesInput>;

    @Field(() => [CourseCategoryUpsertWithWhereUniqueWithoutCoursesInput], {nullable:true})
    upsert?: Array<CourseCategoryUpsertWithWhereUniqueWithoutCoursesInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    set?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    delete?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    connect?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryUpdateWithWhereUniqueWithoutCoursesInput], {nullable:true})
    update?: Array<CourseCategoryUpdateWithWhereUniqueWithoutCoursesInput>;

    @Field(() => [CourseCategoryUpdateManyWithWhereWithoutCoursesInput], {nullable:true})
    updateMany?: Array<CourseCategoryUpdateManyWithWhereWithoutCoursesInput>;

    @Field(() => [CourseCategoryScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseCategoryScalarWhereInput>;
}
