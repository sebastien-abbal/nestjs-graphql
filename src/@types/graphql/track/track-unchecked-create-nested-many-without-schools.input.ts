import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutSchoolsInput } from './track-create-without-schools.input';
import { TrackCreateOrConnectWithoutSchoolsInput } from './track-create-or-connect-without-schools.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@InputType()
export class TrackUncheckedCreateNestedManyWithoutSchoolsInput {

    @Field(() => [TrackCreateWithoutSchoolsInput], {nullable:true})
    create?: Array<TrackCreateWithoutSchoolsInput>;

    @Field(() => [TrackCreateOrConnectWithoutSchoolsInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutSchoolsInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;
}
