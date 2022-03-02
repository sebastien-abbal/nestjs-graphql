import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CourseListRelationFilter } from '../course/course-list-relation-filter.input';
import { TrackListRelationFilter } from '../track/track-list-relation-filter.input';

@InputType()
export class CourseCategoryWhereInput {

    @Field(() => [CourseCategoryWhereInput], {nullable:true})
    AND?: Array<CourseCategoryWhereInput>;

    @Field(() => [CourseCategoryWhereInput], {nullable:true})
    OR?: Array<CourseCategoryWhereInput>;

    @Field(() => [CourseCategoryWhereInput], {nullable:true})
    NOT?: Array<CourseCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    courses?: CourseListRelationFilter;

    @HideField()
    tracks?: TrackListRelationFilter;
}
