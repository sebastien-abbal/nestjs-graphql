import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TeacherCountAggregate } from './teacher-count-aggregate.output';
import { TeacherMinAggregate } from './teacher-min-aggregate.output';
import { TeacherMaxAggregate } from './teacher-max-aggregate.output';

@ObjectType()
export class AggregateTeacher {

    @Field(() => TeacherCountAggregate, {nullable:true})
    _count?: TeacherCountAggregate;

    @Field(() => TeacherMinAggregate, {nullable:true})
    _min?: TeacherMinAggregate;

    @Field(() => TeacherMaxAggregate, {nullable:true})
    _max?: TeacherMaxAggregate;
}
