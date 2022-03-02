import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemUpdateInput } from './thinkific-item-update.input';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';

@ArgsType()
export class UpdateOneThinkificItemArgs {

    @Field(() => ThinkificItemUpdateInput, {nullable:false})
    data!: ThinkificItemUpdateInput;

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;
}
