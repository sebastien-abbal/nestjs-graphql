import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolCreateWithoutTracksInput } from './school-create-without-tracks.input';

@InputType()
export class SchoolCreateOrConnectWithoutTracksInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateWithoutTracksInput, {nullable:false})
    create!: SchoolCreateWithoutTracksInput;
}
