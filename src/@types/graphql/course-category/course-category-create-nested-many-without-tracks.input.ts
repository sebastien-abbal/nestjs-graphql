import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryCreateWithoutTracksInput } from './course-category-create-without-tracks.input';
import { CourseCategoryCreateOrConnectWithoutTracksInput } from './course-category-create-or-connect-without-tracks.input';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';

@InputType()
export class CourseCategoryCreateNestedManyWithoutTracksInput {

    @Field(() => [CourseCategoryCreateWithoutTracksInput], {nullable:true})
    create?: Array<CourseCategoryCreateWithoutTracksInput>;

    @Field(() => [CourseCategoryCreateOrConnectWithoutTracksInput], {nullable:true})
    connectOrCreate?: Array<CourseCategoryCreateOrConnectWithoutTracksInput>;

    @Field(() => [CourseCategoryWhereUniqueInput], {nullable:true})
    connect?: Array<CourseCategoryWhereUniqueInput>;
}
