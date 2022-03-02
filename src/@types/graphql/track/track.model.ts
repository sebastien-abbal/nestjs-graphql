import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { School } from '../school/school.model';
import { CourseCategory } from '../course-category/course-category.model';
import { TrackCount } from './track-count.output';

@ObjectType()
export class Track {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [School], {nullable:true})
    schools?: Array<School>;

    @Field(() => [CourseCategory], {nullable:true})
    categories?: Array<CourseCategory>;

    @Field(() => TrackCount, {nullable:false})
    _count?: TrackCount;
}
