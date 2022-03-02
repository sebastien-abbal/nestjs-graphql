import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutTracksInput } from './school-create-without-tracks.input';
import { SchoolCreateOrConnectWithoutTracksInput } from './school-create-or-connect-without-tracks.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedManyWithoutTracksInput {

    @Field(() => [SchoolCreateWithoutTracksInput], {nullable:true})
    create?: Array<SchoolCreateWithoutTracksInput>;

    @Field(() => [SchoolCreateOrConnectWithoutTracksInput], {nullable:true})
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutTracksInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    connect?: Array<SchoolWhereUniqueInput>;
}
