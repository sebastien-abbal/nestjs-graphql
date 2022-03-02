import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThinkificItemWhereInput } from './thinkific-item-where.input';
import { ThinkificItemOrderByWithRelationInput } from './thinkific-item-order-by-with-relation.input';
import { ThinkificItemWhereUniqueInput } from './thinkific-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThinkificItemScalarFieldEnum } from './thinkific-item-scalar-field.enum';

@ArgsType()
export class FindFirstThinkificItemArgs {

    @Field(() => ThinkificItemWhereInput, {nullable:true})
    where?: ThinkificItemWhereInput;

    @Field(() => [ThinkificItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ThinkificItemOrderByWithRelationInput>;

    @Field(() => ThinkificItemWhereUniqueInput, {nullable:true})
    cursor?: ThinkificItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ThinkificItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ThinkificItemScalarFieldEnum>;
}
