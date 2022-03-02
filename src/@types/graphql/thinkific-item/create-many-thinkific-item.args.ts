import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemCreateManyInput } from './thinkific-item-create-many.input';

@ArgsType()
export class CreateManyThinkificItemArgs {

    @Field(() => [ThinkificItemCreateManyInput], {nullable:false})
    data!: Array<ThinkificItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
