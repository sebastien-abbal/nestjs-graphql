import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemWhereInput } from './thinkific-item-where.input';

@ArgsType()
export class DeleteManyThinkificItemArgs {

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    where?: ThinkificItemWhereInput;
}
