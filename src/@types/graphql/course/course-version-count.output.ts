import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CourseVersionCount {

    @Field(() => Int, {nullable:false})
    formationSessions?: number;

    @Field(() => Int, {nullable:false})
    supports?: number;
}
