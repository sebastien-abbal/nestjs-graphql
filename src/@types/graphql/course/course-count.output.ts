import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CourseCount {

    @Field(() => Int, {nullable:false})
    versions?: number;

    @Field(() => Int, {nullable:false})
    categories?: number;
}
