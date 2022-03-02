import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CourseVersionAvgAggregate {

    @Field(() => Float, {nullable:true})
    versionNumber?: number;
}
