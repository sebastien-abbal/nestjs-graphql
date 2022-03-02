import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemUpdateManyMutationInput } from './thinkific-item-update-many-mutation.input';
import { ThinkificItemWhereInput } from './thinkific-item-where.input';

@ArgsType()
export class UpdateManyThinkificItemArgs {

    @Field(() => ThinkificItemUpdateManyMutationInput, {nullable:false})
    data!: ThinkificItemUpdateManyMutationInput;

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    where?: ThinkificItemWhereInput;
}
