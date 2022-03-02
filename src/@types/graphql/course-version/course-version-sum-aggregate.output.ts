import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CourseVersionSumAggregate {

    @Field(() => Int, {nullable:true})
    versionNumber?: number;
}
