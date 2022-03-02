import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMediaProviderNullableWithAggregatesFilter } from '../prisma/enum-media-provider-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumMediaStatusWithAggregatesFilter } from '../prisma/enum-media-status-with-aggregates-filter.input';
import { EnumCourseSupportSourceTypeWithAggregatesFilter } from '../prisma/enum-course-support-source-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class CourseVersionSupportSourceScalarWhereWithAggregatesInput {

    @Field(() => [CourseVersionSupportSourceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CourseVersionSupportSourceScalarWhereWithAggregatesInput>;

    @Field(() => [CourseVersionSupportSourceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CourseVersionSupportSourceScalarWhereWithAggregatesInput>;

    @Field(() => [CourseVersionSupportSourceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CourseVersionSupportSourceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    provider?: EnumMediaProviderNullableWithAggregatesFilter;

    @HideField()
    status?: EnumMediaStatusWithAggregatesFilter;

    @Field(() => EnumCourseSupportSourceTypeWithAggregatesFilter, {nullable:true})
    type?: EnumCourseSupportSourceTypeWithAggregatesFilter;

    @HideField()
    size?: IntNullableWithAggregatesFilter;

    @HideField()
    width?: IntNullableWithAggregatesFilter;

    @HideField()
    height?: IntNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    fileToDeleteAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    userID?: StringWithAggregatesFilter;

    @HideField()
    courseID?: StringWithAggregatesFilter;
}
