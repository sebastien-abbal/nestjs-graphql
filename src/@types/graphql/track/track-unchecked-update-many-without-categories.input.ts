import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutCategoriesInput } from './track-create-without-categories.input';
import { TrackCreateOrConnectWithoutCategoriesInput } from './track-create-or-connect-without-categories.input';
import { TrackUpsertWithWhereUniqueWithoutCategoriesInput } from './track-upsert-with-where-unique-without-categories.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithWhereUniqueWithoutCategoriesInput } from './track-update-with-where-unique-without-categories.input';
import { TrackUpdateManyWithWhereWithoutCategoriesInput } from './track-update-many-with-where-without-categories.input';
import { TrackScalarWhereInput } from './track-scalar-where.input';

@InputType()
export class TrackUncheckedUpdateManyWithoutCategoriesInput {

    @Field(() => [TrackCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<TrackCreateWithoutCategoriesInput>;

    @Field(() => [TrackCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [TrackUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    upsert?: Array<TrackUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    set?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    delete?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    update?: Array<TrackUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [TrackUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    updateMany?: Array<TrackUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackScalarWhereInput>;
}
