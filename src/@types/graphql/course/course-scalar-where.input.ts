import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSessionFormatFilter } from '../prisma/enum-session-format-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class CourseScalarWhereInput {

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    AND?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    OR?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    NOT?: Array<CourseScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => EnumSessionFormatFilter, {nullable:true})
    format?: EnumSessionFormatFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    teacherID?: StringFilter;
}
