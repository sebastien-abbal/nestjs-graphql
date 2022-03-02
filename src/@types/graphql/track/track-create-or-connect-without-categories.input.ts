import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackCreateWithoutCategoriesInput } from './track-create-without-categories.input';

@InputType()
export class TrackCreateOrConnectWithoutCategoriesInput {

    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackCreateWithoutCategoriesInput, {nullable:false})
    create!: TrackCreateWithoutCategoriesInput;
}
