import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemCreateWithoutSessionInput } from './thinkific-item-create-without-session.input';
import { ThinkificItemCreateOrConnectWithoutSessionInput } from './thinkific-item-create-or-connect-without-session.input';
import { ThinkificItemCreateManySessionInputEnvelope } from './thinkific-item-create-many-session-input-envelope.input';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';

@InputType()
export class ThinkificItemCreateNestedManyWithoutSessionInput {

    @Field(() => [ThinkificItemCreateWithoutSessionInput], {nullable:true})
    create?: Array<ThinkificItemCreateWithoutSessionInput>;

    @Field(() => [ThinkificItemCreateOrConnectWithoutSessionInput], {nullable:true})
    connectOrCreate?: Array<ThinkificItemCreateOrConnectWithoutSessionInput>;

    @Field(() => ThinkificItemCreateManySessionInputEnvelope, {nullable:true})
    createMany?: ThinkificItemCreateManySessionInputEnvelope;

    @Field(() => [ThinkificItemWhereUniqueInput], {nullable:true})
    connect?: Array<ThinkificItemWhereUniqueInput>;
}
