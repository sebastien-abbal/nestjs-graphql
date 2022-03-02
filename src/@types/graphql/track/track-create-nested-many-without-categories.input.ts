import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutCategoriesInput } from './track-create-without-categories.input';
import { TrackCreateOrConnectWithoutCategoriesInput } from './track-create-or-connect-without-categories.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@InputType()
export class TrackCreateNestedManyWithoutCategoriesInput {

    @Field(() => [TrackCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<TrackCreateWithoutCategoriesInput>;

    @Field(() => [TrackCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;
}
