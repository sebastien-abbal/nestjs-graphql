import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemUpdateWithoutSessionInput } from './thinkific-item-update-without-session.input';
import { ThinkificItemCreateWithoutSessionInput } from './thinkific-item-create-without-session.input';

@InputType()
export class ThinkificItemUpsertWithWhereUniqueWithoutSessionInput {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;

    @Field(() => ThinkificItemUpdateWithoutSessionInput, {nullable:false})
    update!: ThinkificItemUpdateWithoutSessionInput;

    @Field(() => ThinkificItemCreateWithoutSessionInput, {nullable:false})
    create!: ThinkificItemCreateWithoutSessionInput;
}
