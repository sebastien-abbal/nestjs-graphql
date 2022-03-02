import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumSessionFormatWithAggregatesFilter } from '../prisma/enum-session-format-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class FormationSessionScalarWhereWithAggregatesInput {

    @Field(() => [FormationSessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FormationSessionScalarWhereWithAggregatesInput>;

    @Field(() => [FormationSessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FormationSessionScalarWhereWithAggregatesInput>;

    @Field(() => [FormationSessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FormationSessionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    summaryNote?: StringNullableWithAggregatesFilter;

    @Field(() => EnumSessionFormatWithAggregatesFilter, {nullable:true})
    format?: EnumSessionFormatWithAggregatesFilter;

    @HideField()
    isEnabled?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startsAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endsAt?: DateTimeWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    formationID?: StringWithAggregatesFilter;

    @HideField()
    courseID?: StringWithAggregatesFilter;
}
