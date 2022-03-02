import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemCreateWithoutSessionInput } from './thinkific-item-create-without-session.input';
import { ThinkificItemCreateOrConnectWithoutSessionInput } from './thinkific-item-create-or-connect-without-session.input';
import { ThinkificItemUpsertWithWhereUniqueWithoutSessionInput } from './thinkific-item-upsert-with-where-unique-without-session.input';
import { ThinkificItemCreateManySessionInputEnvelope } from './thinkific-item-create-many-session-input-envelope.input';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemUpdateWithWhereUniqueWithoutSessionInput } from './thinkific-item-update-with-where-unique-without-session.input';
import { ThinkificItemUpdateManyWithWhereWithoutSessionInput } from './thinkific-item-update-many-with-where-without-session.input';
import { ThinkificItemScalarWhereInput } from './thinkific-item-scalar-where.input';

@InputType()
export class ThinkificItemUpdateManyWithoutSessionInput {

    @Field(() => [ThinkificItemCreateWithoutSessionInput], {nullable:true})
    create?: Array<ThinkificItemCreateWithoutSessionInput>;

    @Field(() => [ThinkificItemCreateOrConnectWithoutSessionInput], {nullable:true})
    connectOrCreate?: Array<ThinkificItemCreateOrConnectWithoutSessionInput>;

    @Field(() => [ThinkificItemUpsertWithWhereUniqueWithoutSessionInput], {nullable:true})
    upsert?: Array<ThinkificItemUpsertWithWhereUniqueWithoutSessionInput>;

    @Field(() => ThinkificItemCreateManySessionInputEnvelope, {nullable:true})
    createMany?: ThinkificItemCreateManySessionInputEnvelope;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    set?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    delete?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    connect?: Array<ThinkificItemWhereUniqueInput>;

    @Field(() => [ThinkificItemUpdateWithWhereUniqueWithoutSessionInput], {nullable:true})
    update?: Array<ThinkificItemUpdateWithWhereUniqueWithoutSessionInput>;

    @Field(() => [ThinkificItemUpdateManyWithWhereWithoutSessionInput], {nullable:true})
    updateMany?: Array<ThinkificItemUpdateManyWithWhereWithoutSessionInput>;

    @Field(() => [ThinkificItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<ThinkificItemScalarWhereInput>;
}
