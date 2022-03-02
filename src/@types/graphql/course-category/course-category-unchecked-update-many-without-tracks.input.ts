import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryCreateWithoutTracksInput } from './course-category-create-without-tracks.input';
import { CourseCategoryCreateOrConnectWithoutTracksInput } from './course-category-create-or-connect-without-tracks.input';
import { CourseCategoryUpsertWithWhereUniqueWithoutTracksInput } from './course-category-upsert-with-where-unique-without-tracks.input';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryUpdateWithWhereUniqueWithoutTracksInput } from './course-category-update-with-where-unique-without-tracks.input';
import { CourseCategoryUpdateManyWithWhereWithoutTracksInput } from './course-category-update-many-with-where-without-tracks.input';
import { CourseCategoryScalarWhereInput } from './course-category-scalar-where.input';

@InputType()
export class CourseCategoryUncheckedUpdateManyWithoutTracksInput {

    @Field(() => [CourseCategoryCreateWithoutTracksInput], {nullable:true})
    create?: Array<CourseCategoryCreateWithoutTracksInput>;

    @Field(() => [CourseCategoryCreateOrConnectWithoutTracksInput], {nullable:true})
    connectOrCreate?: Array<CourseCategoryCreateOrConnectWithoutTracksInput>;

    @Field(() => [CourseCategoryUpsertWithWhereUniqueWithoutTracksInput], {nullable:true})
    upsert?: Array<CourseCategoryUpsertWithWhereUniqueWithoutTracksInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    set?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    delete?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    connect?: Array<CourseCategoryWhereUniqueInput>;

    @Field(() => [CourseCategoryUpdateWithWhereUniqueWithoutTracksInput], {nullable:true})
    update?: Array<CourseCategoryUpdateWithWhereUniqueWithoutTracksInput>;

    @Field(() => [CourseCategoryUpdateManyWithWhereWithoutTracksInput], {nullable:true})
    updateMany?: Array<CourseCategoryUpdateManyWithWhereWithoutTracksInput>;

    @Field(() => [CourseCategoryScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseCategoryScalarWhereInput>;
}
