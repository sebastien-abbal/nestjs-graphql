import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';

@ArgsType()
export class DeleteOneThinkificItemArgs {

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:false})
    where!: ThinkificItemWhereUniqueInput;
}
