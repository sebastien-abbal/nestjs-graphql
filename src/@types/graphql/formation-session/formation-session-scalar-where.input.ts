import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumSessionFormatFilter } from '../prisma/enum-session-format-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class FormationSessionScalarWhereInput {

    @Field(() => [FormationSessionScalarWhereInput], {nullable:true})
    AND?: Array<FormationSessionScalarWhereInput>;

    @Field(() => [FormationSessionScalarWhereInput], {nullable:true})
    OR?: Array<FormationSessionScalarWhereInput>;

    @Field(() => [FormationSessionScalarWhereInput], {nullable:true})
    NOT?: Array<FormationSessionScalarWhereInput>;

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
    formationID?: StringFilter;

    @HideField()
    courseID?: StringFilter;
}
