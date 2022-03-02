import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TrackCount {

    @Field(() => Int, {nullable:false})
    schools?: number;

    @Field(() => Int, {nullable:false})
    categories?: number;
}
