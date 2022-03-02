import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SchoolListRelationFilter } from '../school/school-list-relation-filter.input';
import { CourseCategoryListRelationFilter } from '../course-category/course-category-list-relation-filter.input';

@InputType()
export class TrackWhereInput {

    @Field(() => [TrackWhereInput], {nullable:true})
    AND?: Array<TrackWhereInput>;

    @Field(() => [TrackWhereInput], {nullable:true})
    OR?: Array<TrackWhereInput>;

    @Field(() => [TrackWhereInput], {nullable:true})
    NOT?: Array<TrackWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isEnabled?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    schools?: SchoolListRelationFilter;

    @HideField()
    categories?: CourseCategoryListRelationFilter;
}
