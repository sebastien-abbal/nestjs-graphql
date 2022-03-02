import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCategoryWhereUniqueInput } from './course-category-where-unique.input';
import { CourseCategoryCreateWithoutTracksInput } from './course-category-create-without-tracks.input';

@InputType()
export class CourseCategoryCreateOrConnectWithoutTracksInput {

    @Field(() => CourseCategoryWhereUniqueInput, {nullable:false})
    where!: CourseCategoryWhereUniqueInput;

    @Field(() => CourseCategoryCreateWithoutTracksInput, {nullable:false})
    create!: CourseCategoryCreateWithoutTracksInput;
}
