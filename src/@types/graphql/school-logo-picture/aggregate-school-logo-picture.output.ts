import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SchoolLogoPictureCountAggregate } from './school-logo-picture-count-aggregate.output';
import { SchoolLogoPictureAvgAggregate } from './school-logo-picture-avg-aggregate.output';
import { SchoolLogoPictureSumAggregate } from './school-logo-picture-sum-aggregate.output';
import { SchoolLogoPictureMinAggregate } from './school-logo-picture-min-aggregate.output';
import { SchoolLogoPictureMaxAggregate } from './school-logo-picture-max-aggregate.output';

@ObjectType()
export class AggregateSchoolLogoPicture {

    @Field(() => SchoolLogoPictureCountAggregate, {nullable:true})
    _count?: SchoolLogoPictureCountAggregate;

    @Field(() => SchoolLogoPictureAvgAggregate, {nullable:true})
    _avg?: SchoolLogoPictureAvgAggregate;

    @Field(() => SchoolLogoPictureSumAggregate, {nullable:true})
    _sum?: SchoolLogoPictureSumAggregate;

    @Field(() => SchoolLogoPictureMinAggregate, {nullable:true})
    _min?: SchoolLogoPictureMinAggregate;

    @Field(() => SchoolLogoPictureMaxAggregate, {nullable:true})
    _max?: SchoolLogoPictureMaxAggregate;
}
