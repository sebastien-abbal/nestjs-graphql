import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumSessionFormatFilter } from '../prisma/enum-session-format-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FormationSessionListRelationFilter } from '../formation-session/formation-session-list-relation-filter.input';
import { CourseRelationFilter } from '../course/course-relation-filter.input';
import { CourseVersionSupportSourceListRelationFilter } from '../course-version-support-source/course-version-support-source-list-relation-filter.input';

@InputType()
export class CourseVersionWhereInput {

    @Field(() => [CourseVersionWhereInput], {nullable:true})
    AND?: Array<CourseVersionWhereInput>;

    @Field(() => [CourseVersionWhereInput], {nullable:true})
    OR?: Array<CourseVersionWhereInput>;

    @Field(() => [CourseVersionWhereInput], {nullable:true})
    NOT?: Array<CourseVersionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    versionNumber?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumSessionFormatFilter, {nullable:true})
    format?: EnumSessionFormatFilter;

    @HideField()
    validatedBy?: UserRelationFilter;

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
    formationSessions?: FormationSessionListRelationFilter;

    @HideField()
    course?: CourseRelationFilter;

    @HideField()
    courseID?: StringFilter;

    @HideField()
    supports?: CourseVersionSupportSourceListRelationFilter;
}
