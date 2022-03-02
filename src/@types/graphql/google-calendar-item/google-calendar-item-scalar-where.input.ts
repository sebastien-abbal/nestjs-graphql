import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class GoogleCalendarItemScalarWhereInput {

    @Field(() => [GoogleCalendarItemScalarWhereInput], {nullable:true})
    AND?: Array<GoogleCalendarItemScalarWhereInput>;

    @Field(() => [GoogleCalendarItemScalarWhereInput], {nullable:true})
    OR?: Array<GoogleCalendarItemScalarWhereInput>;

    @Field(() => [GoogleCalendarItemScalarWhereInput], {nullable:true})
    NOT?: Array<GoogleCalendarItemScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    googleCalendarID?: StringFilter;

    @HideField()
    createdByID?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    sessionID?: StringFilter;
}
