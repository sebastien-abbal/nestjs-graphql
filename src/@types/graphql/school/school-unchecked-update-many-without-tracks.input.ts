import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutTracksInput } from './school-create-without-tracks.input';
import { SchoolCreateOrConnectWithoutTracksInput } from './school-create-or-connect-without-tracks.input';
import { SchoolUpsertWithWhereUniqueWithoutTracksInput } from './school-upsert-with-where-unique-without-tracks.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithWhereUniqueWithoutTracksInput } from './school-update-with-where-unique-without-tracks.input';
import { SchoolUpdateManyWithWhereWithoutTracksInput } from './school-update-many-with-where-without-tracks.input';
import { SchoolScalarWhereInput } from './school-scalar-where.input';

@InputType()
export class SchoolUncheckedUpdateManyWithoutTracksInput {

    @Field(() => [SchoolCreateWithoutTracksInput], {nullable:true})
    create?: Array<SchoolCreateWithoutTracksInput>;

    @Field(() => [SchoolCreateOrConnectWithoutTracksInput], {nullable:true})
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutTracksInput>;

    @Field(() => [SchoolUpsertWithWhereUniqueWithoutTracksInput], {nullable:true})
    upsert?: Array<SchoolUpsertWithWhereUniqueWithoutTracksInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    set?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    disconnect?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    delete?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    connect?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolUpdateWithWhereUniqueWithoutTracksInput], {nullable:true})
    update?: Array<SchoolUpdateWithWhereUniqueWithoutTracksInput>;

    @Field(() => [SchoolUpdateManyWithWhereWithoutTracksInput], {nullable:true})
    updateMany?: Array<SchoolUpdateManyWithWhereWithoutTracksInput>;

    @Field(() => [SchoolScalarWhereInput], {nullable:true})
    deleteMany?: Array<SchoolScalarWhereInput>;
}
