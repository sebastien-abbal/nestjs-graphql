import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemUpdateWithoutCreatedByInput } from './thinkific-item-update-without-created-by.input';
import { ThinkificItemCreateWithoutCreatedByInput } from './thinkific-item-create-without-created-by.input';

@InputType()
export class ThinkificItemUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;

    @Field(() => ThinkificItemUpdateWithoutCreatedByInput, {nullable:false})
    update!: ThinkificItemUpdateWithoutCreatedByInput;

    @Field(() => ThinkificItemCreateWithoutCreatedByInput, {nullable:false})
    create!: ThinkificItemCreateWithoutCreatedByInput;
}
