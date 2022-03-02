import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumSessionFormatFilter } from '../prisma/enum-session-format-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FormationRelationFilter } from '../formation/formation-relation-filter.input';
import { CourseVersionRelationFilter } from '../course-version/course-version-relation-filter.input';
import { ThinkificItemListRelationFilter } from '../thinkific-item/thinkific-item-list-relation-filter.input';
import { GoogleCalendarItemRelationFilter } from '../google-calendar-item/google-calendar-item-relation-filter.input';

@InputType()
export class FormationSessionWhereInput {

    @Field(() => [FormationSessionWhereInput], {nullable:true})
    AND?: Array<FormationSessionWhereInput>;

    @Field(() => [FormationSessionWhereInput], {nullable:true})
    OR?: Array<FormationSessionWhereInput>;

    @Field(() => [FormationSessionWhereInput], {nullable:true})
    NOT?: Array<FormationSessionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    summaryNote?: StringNullableFilter;

    @Field(() => EnumSessionFormatFilter, {nullable:true})
    format?: EnumSessionFormatFilter;

    @HideField()
    isEnabled?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startsAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endsAt?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    formation?: FormationRelationFilter;

    @HideField()
    formationID?: StringFilter;

    @HideField()
    course?: CourseVersionRelationFilter;

    @HideField()
    courseID?: StringFilter;

    @HideField()
    thinkificItems?: ThinkificItemListRelationFilter;

    @HideField()
    googleCalendarItem?: GoogleCalendarItemRelationFilter;
}
