import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithoutTracksInput } from './school-update-without-tracks.input';
import { SchoolCreateWithoutTracksInput } from './school-create-without-tracks.input';

@InputType()
export class SchoolUpsertWithWhereUniqueWithoutTracksInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateWithoutTracksInput, {nullable:false})
    update!: SchoolUpdateWithoutTracksInput;

    @Field(() => SchoolCreateWithoutTracksInput, {nullable:false})
    create!: SchoolCreateWithoutTracksInput;
}
