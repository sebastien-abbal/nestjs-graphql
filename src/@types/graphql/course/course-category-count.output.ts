import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CourseCategoryCount {

    @Field(() => Int, {nullable:false})
    courses?: number;

    @Field(() => Int, {nullable:false})
    tracks?: number;
}
