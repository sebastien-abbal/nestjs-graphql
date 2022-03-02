import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemCreateWithoutCreatedByInput } from './thinkific-item-create-without-created-by.input';
import { ThinkificItemCreateOrConnectWithoutCreatedByInput } from './thinkific-item-create-or-connect-without-created-by.input';
import { ThinkificItemCreateManyCreatedByInputEnvelope } from './thinkific-item-create-many-created-by-input-envelope.input';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';

@InputType()
export class ThinkificItemUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [ThinkificItemCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<ThinkificItemCreateWithoutCreatedByInput>;

    @Field(() => [ThinkificItemCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<ThinkificItemCreateOrConnectWithoutCreatedByInput>;

    @Field(() => ThinkificItemCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: ThinkificItemCreateManyCreatedByInputEnvelope;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    connect?: Array<ThinkificItemWhereUniqueInput>;
}
