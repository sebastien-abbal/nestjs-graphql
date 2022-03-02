import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemCreateWithoutCreatedByInput } from './thinkific-item-create-without-created-by.input';
import { ThinkificItemCreateOrConnectWithoutCreatedByInput } from './thinkific-item-create-or-connect-without-created-by.input';
import { ThinkificItemUpsertWithWhereUniqueWithoutCreatedByInput } from './thinkific-item-upsert-with-where-unique-without-created-by.input';
import { ThinkificItemCreateManyCreatedByInputEnvelope } from './thinkific-item-create-many-created-by-input-envelope.input';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemUpdateWithWhereUniqueWithoutCreatedByInput } from './thinkific-item-update-with-where-unique-without-created-by.input';
import { ThinkificItemUpdateManyWithWhereWithoutCreatedByInput } from './thinkific-item-update-many-with-where-without-created-by.input';
import { ThinkificItemScalarWhereInput } from './thinkific-item-scalar-where.input';

@InputType()
export class ThinkificItemUpdateManyWithoutCreatedByInput {

    @Field(() => [ThinkificItemCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<ThinkificItemCreateWithoutCreatedByInput>;

    @Field(() => [ThinkificItemCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<ThinkificItemCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [ThinkificItemUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    upsert?: Array<ThinkificItemUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => ThinkificItemCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: ThinkificItemCreateManyCreatedByInputEnvelope;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    set?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    delete?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    connect?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    update?: Array<ThinkificItemUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [ThinkificItemUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    updateMany?: Array<ThinkificItemUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [ThinkificItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<ThinkificItemScalarWhereInput>;
}
