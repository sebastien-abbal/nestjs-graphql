import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SchoolCountAggregate } from './school-count-aggregate.output';
import { SchoolMinAggregate } from './school-min-aggregate.output';
import { SchoolMaxAggregate } from './school-max-aggregate.output';

@ObjectType()
export class SchoolGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isEnabled!: boolean;

    @Field(() => String, {nullable:true})
    websiteUrl?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => SchoolCountAggregate, {nullable:true})
    _count?: SchoolCountAggregate;

    @Field(() => SchoolMinAggregate, {nullable:true})
    _min?: SchoolMinAggregate;

    @Field(() => SchoolMaxAggregate, {nullable:true})
    _max?: SchoolMaxAggregate;
}
