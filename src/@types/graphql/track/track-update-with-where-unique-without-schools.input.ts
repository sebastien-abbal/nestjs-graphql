import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutSchoolsInput } from './track-update-without-schools.input';

@InputType()
export class TrackUpdateWithWhereUniqueWithoutSchoolsInput {

    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutSchoolsInput, {nullable:false})
    data!: TrackUpdateWithoutSchoolsInput;
}
