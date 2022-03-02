import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { StudentCountAggregate } from './student-count-aggregate.output';
import { StudentMinAggregate } from './student-min-aggregate.output';
import { StudentMaxAggregate } from './student-max-aggregate.output';

@ObjectType()
export class StudentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    userID!: string;

    @Field(() => StudentCountAggregate, {nullable:true})
    _count?: StudentCountAggregate;

    @Field(() => StudentMinAggregate, {nullable:true})
    _min?: StudentMinAggregate;

    @Field(() => StudentMaxAggregate, {nullable:true})
    _max?: StudentMaxAggregate;
}
