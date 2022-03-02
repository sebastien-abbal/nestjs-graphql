import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutCategoriesInput } from './track-update-without-categories.input';
import { TrackCreateWithoutCategoriesInput } from './track-create-without-categories.input';

@InputType()
export class TrackUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutCategoriesInput, {nullable:false})
    update!: TrackUpdateWithoutCategoriesInput;

    @Field(() => TrackCreateWithoutCategoriesInput, {nullable:false})
    create!: TrackCreateWithoutCategoriesInput;
}
