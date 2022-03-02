import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutSchoolsInput } from './track-create-without-schools.input';
import { TrackCreateOrConnectWithoutSchoolsInput } from './track-create-or-connect-without-schools.input';
import { TrackUpsertWithWhereUniqueWithoutSchoolsInput } from './track-upsert-with-where-unique-without-schools.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithWhereUniqueWithoutSchoolsInput } from './track-update-with-where-unique-without-schools.input';
import { TrackUpdateManyWithWhereWithoutSchoolsInput } from './track-update-many-with-where-without-schools.input';
import { TrackScalarWhereInput } from './track-scalar-where.input';

@InputType()
export class TrackUpdateManyWithoutSchoolsInput {

    @Field(() => [TrackCreateWithoutSchoolsInput], {nullable:true})
    create?: Array<TrackCreateWithoutSchoolsInput>;

    @Field(() => [TrackCreateOrConnectWithoutSchoolsInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutSchoolsInput>;

    @Field(() => [TrackUpsertWithWhereUniqueWithoutSchoolsInput], {nullable:true})
    upsert?: Array<TrackUpsertWithWhereUniqueWithoutSchoolsInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    set?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    delete?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackUpdateWithWhereUniqueWithoutSchoolsInput], {nullable:true})
    update?: Array<TrackUpdateWithWhereUniqueWithoutSchoolsInput>;

    @Field(() => [TrackUpdateManyWithWhereWithoutSchoolsInput], {nullable:true})
    updateMany?: Array<TrackUpdateManyWithWhereWithoutSchoolsInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackScalarWhereInput>;
}
