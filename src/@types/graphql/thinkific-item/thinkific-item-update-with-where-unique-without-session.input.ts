import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemUpdateWithoutSessionInput } from './thinkific-item-update-without-session.input';

@InputType()
export class ThinkificItemUpdateWithWhereUniqueWithoutSessionInput {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;

    @Field(() => ThinkificItemUpdateWithoutSessionInput, {nullable:false})
    data!: ThinkificItemUpdateWithoutSessionInput;
}
