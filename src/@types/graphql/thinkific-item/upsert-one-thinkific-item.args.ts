import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { ThinkificItemCreateInput } from './thinkific-item-create.input';
import { ThinkificItemUpdateInput } from './thinkific-item-update.input';

@ArgsType()
export class UpsertOneThinkificItemArgs {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;

    @Field(() => ThinkificItemCreateInput, {nullable:false})
    create!: ThinkificItemCreateInput;

    @Field(() => ThinkificItemUpdateInput, {nullable:false})
    update!: ThinkificItemUpdateInput;
}
