import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemCreateWithoutCreatedByInput } from './thinkific-item-create-without-created-by.input';

@InputType()
export class ThinkificItemCreateOrConnectWithoutCreatedByInput {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;

    @Field(() => ThinkificItemCreateWithoutCreatedByInput, {nullable:false})
    create!: ThinkificItemCreateWithoutCreatedByInput;
}
