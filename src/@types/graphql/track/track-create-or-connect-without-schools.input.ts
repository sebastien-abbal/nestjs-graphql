import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackCreateWithoutSchoolsInput } from './track-create-without-schools.input';

@InputType()
export class TrackCreateOrConnectWithoutSchoolsInput {

    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackCreateWithoutSchoolsInput, {nullable:false})
    create!: TrackCreateWithoutSchoolsInput;
}
