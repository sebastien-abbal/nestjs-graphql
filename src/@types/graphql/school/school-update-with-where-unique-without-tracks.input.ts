import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithoutTracksInput } from './school-update-without-tracks.input';

@InputType()
export class SchoolUpdateWithWhereUniqueWithoutTracksInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateWithoutTracksInput, {nullable:false})
    data!: SchoolUpdateWithoutTracksInput;
}
