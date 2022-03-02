import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutSchoolsInput } from './track-update-without-schools.input';
import { TrackCreateWithoutSchoolsInput } from './track-create-without-schools.input';

@InputType()
export class TrackUpsertWithWhereUniqueWithoutSchoolsInput {

    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutSchoolsInput, {nullable:false})
    update!: TrackUpdateWithoutSchoolsInput;

    @Field(() => TrackCreateWithoutSchoolsInput, {nullable:false})
    create!: TrackCreateWithoutSchoolsInput;
}
