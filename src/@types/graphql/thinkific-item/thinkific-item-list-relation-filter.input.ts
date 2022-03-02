import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemWhereInput } from './thinkific-item-where.input';

@InputType()
export class ThinkificItemListRelationFilter {

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    every?: ThinkificItemWhereInput;

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    some?: ThinkificItemWhereInput;

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    none?: ThinkificItemWhereInput;
}
