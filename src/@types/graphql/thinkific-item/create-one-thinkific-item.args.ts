import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemCreateInput } from './thinkific-item-create.input';

@ArgsType()
export class CreateOneThinkificItemArgs {

    @Field(() => ThinkificItemCreateInput, {nullable:false})
    data!: ThinkificItemCreateInput;
}
