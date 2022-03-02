import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SchoolCount {

    @Field(() => Int, {nullable:false})
    logoPictures?: number;

    @Field(() => Int, {nullable:false})
    tracks?: number;

    @Field(() => Int, {nullable:false})
    formations?: number;
}
