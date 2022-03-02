import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumSessionFormatWithAggregatesFilter } from '../prisma/enum-session-format-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class CourseScalarWhereWithAggregatesInput {

    @Field(() => [CourseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CourseScalarWhereWithAggregatesInput>;

    @Field(() => [CourseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CourseScalarWhereWithAggregatesInput>;

    @Field(() => [CourseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CourseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => EnumSessionFormatWithAggregatesFilter, {nullable:true})
    format?: EnumSessionFormatWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    teacherID?: StringWithAggregatesFilter;
}
