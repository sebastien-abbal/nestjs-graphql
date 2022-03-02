import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { TeacherCountAggregate } from './teacher-count-aggregate.output';
import { TeacherMinAggregate } from './teacher-min-aggregate.output';
import { TeacherMaxAggregate } from './teacher-max-aggregate.output';

@ObjectType()
export class TeacherGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    isConfirmed!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    userID!: string;

    @Field(() => TeacherCountAggregate, {nullable:true})
    _count?: TeacherCountAggregate;

    @Field(() => TeacherMinAggregate, {nullable:true})
    _min?: TeacherMinAggregate;

    @Field(() => TeacherMaxAggregate, {nullable:true})
    _max?: TeacherMaxAggregate;
}
