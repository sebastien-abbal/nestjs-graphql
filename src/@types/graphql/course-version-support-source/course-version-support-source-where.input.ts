import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMediaProviderNullableFilter } from '../prisma/enum-media-provider-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumMediaStatusFilter } from '../prisma/enum-media-status-filter.input';
import { EnumCourseSupportSourceTypeFilter } from '../prisma/enum-course-support-source-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CourseVersionRelationFilter } from '../course-version/course-version-relation-filter.input';

@InputType()
export class CourseVersionSupportSourceWhereInput {

    @Field(() => [CourseVersionSupportSourceWhereInput], {nullable:true})
    AND?: Array<CourseVersionSupportSourceWhereInput>;

    @Field(() => [CourseVersionSupportSourceWhereInput], {nullable:true})
    OR?: Array<CourseVersionSupportSourceWhereInput>;

    @Field(() => [CourseVersionSupportSourceWhereInput], {nullable:true})
    NOT?: Array<CourseVersionSupportSourceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    provider?: EnumMediaProviderNullableFilter;

    @HideField()
    status?: EnumMediaStatusFilter;

    @Field(() => EnumCourseSupportSourceTypeFilter, {nullable:true})
    type?: EnumCourseSupportSourceTypeFilter;

    @HideField()
    size?: IntNullableFilter;

    @HideField()
    width?: IntNullableFilter;

    @HideField()
    height?: IntNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    fileToDeleteAt?: DateTimeNullableFilter;

    @HideField()
    user?: UserRelationFilter;

    @HideField()
    userID?: StringFilter;

    @HideField()
    course?: CourseVersionRelationFilter;

    @HideField()
    courseID?: StringFilter;
}
