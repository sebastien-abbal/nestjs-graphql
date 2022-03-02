import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumSessionFormatFilter } from '../prisma/enum-session-format-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CourseVersionScalarWhereInput {

    @Field(() => [CourseVersionScalarWhereInput], {nullable:true})
    AND?: Array<CourseVersionScalarWhereInput>;

    @Field(() => [CourseVersionScalarWhereInput], {nullable:true})
    OR?: Array<CourseVersionScalarWhereInput>;

    @Field(() => [CourseVersionScalarWhereInput], {nullable:true})
    NOT?: Array<CourseVersionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    versionNumber?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumSessionFormatFilter, {nullable:true})
    format?: EnumSessionFormatFilter;

    @HideField()
    validatedByID?: StringFilter;

    @HideField()
    validatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    duration?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    courseID?: StringFilter;
}
