import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumSessionFormatWithAggregatesFilter } from '../prisma/enum-session-format-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CourseVersionScalarWhereWithAggregatesInput {

    @Field(() => [CourseVersionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CourseVersionScalarWhereWithAggregatesInput>;

    @Field(() => [CourseVersionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CourseVersionScalarWhereWithAggregatesInput>;

    @Field(() => [CourseVersionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CourseVersionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    versionNumber?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumSessionFormatWithAggregatesFilter, {nullable:true})
    format?: EnumSessionFormatWithAggregatesFilter;

    @HideField()
    validatedByID?: StringWithAggregatesFilter;

    @HideField()
    validatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    duration?: DateTimeWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    courseID?: StringWithAggregatesFilter;
}
