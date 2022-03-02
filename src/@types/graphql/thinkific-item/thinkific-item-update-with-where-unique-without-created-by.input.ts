import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemUpdateWithoutCreatedByInput } from './thinkific-item-update-without-created-by.input';

@InputType()
export class ThinkificItemUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;

    @Field(() => ThinkificItemUpdateWithoutCreatedByInput, {nullable:false})
    data!: ThinkificItemUpdateWithoutCreatedByInput;
}
