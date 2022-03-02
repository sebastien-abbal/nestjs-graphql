import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutCategoriesInput } from './track-update-without-categories.input';

@InputType()
export class TrackUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutCategoriesInput, {nullable:false})
    data!: TrackUpdateWithoutCategoriesInput;
}
