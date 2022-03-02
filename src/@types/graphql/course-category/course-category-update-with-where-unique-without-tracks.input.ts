import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryUpdateWithoutTracksInput } from './course-category-update-without-tracks.input';

@InputType()
export class CourseCategoryUpdateWithWhereUniqueWithoutTracksInput {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;

    @Field(() => CourseCategoryUpdateWithoutTracksInput, {nullable:false})
    data!: CourseCategoryUpdateWithoutTracksInput;
}
