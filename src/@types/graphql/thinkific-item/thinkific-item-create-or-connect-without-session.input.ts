import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemCreateWithoutSessionInput } from './thinkific-item-create-without-session.input';

@InputType()
export class ThinkificItemCreateOrConnectWithoutSessionInput {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;

    @Field(() => ThinkificItemCreateWithoutSessionInput, {nullable:false})
    create!: ThinkificItemCreateWithoutSessionInput;
}
