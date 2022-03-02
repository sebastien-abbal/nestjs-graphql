import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class GoogleCalendarItemScalarWhereWithAggregatesInput {

    @Field(() => [GoogleCalendarItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GoogleCalendarItemScalarWhereWithAggregatesInput>;

    @Field(() => [GoogleCalendarItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GoogleCalendarItemScalarWhereWithAggregatesInput>;

    @Field(() => [GoogleCalendarItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GoogleCalendarItemScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    googleCalendarID?: StringWithAggregatesFilter;

    @HideField()
    createdByID?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    sessionID?: StringWithAggregatesFilter;
}
