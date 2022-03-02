import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FormationCount {

    @Field(() => Int, {nullable:false})
    schools?: number;

    @Field(() => Int, {nullable:false})
    sessions?: number;

    @Field(() => Int, {nullable:false})
    owners?: number;
}
