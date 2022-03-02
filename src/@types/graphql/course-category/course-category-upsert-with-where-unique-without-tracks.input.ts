import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryUpdateWithoutTracksInput } from './course-category-update-without-tracks.input';
import { CourseCategoryCreateWithoutTracksInput } from './course-category-create-without-tracks.input';

@InputType()
export class CourseCategoryUpsertWithWhereUniqueWithoutTracksInput {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;

    @Field(() => CourseCategoryUpdateWithoutTracksInput, {nullable:false})
    update!: CourseCategoryUpdateWithoutTracksInput;

    @Field(() => CourseCategoryCreateWithoutTracksInput, {nullable:false})
    create!: CourseCategoryCreateWithoutTracksInput;
}
