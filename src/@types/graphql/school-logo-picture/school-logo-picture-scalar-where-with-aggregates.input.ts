import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMediaProviderWithAggregatesFilter } from '../prisma/enum-media-provider-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumMediaStatusWithAggregatesFilter } from '../prisma/enum-media-status-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class SchoolLogoPictureScalarWhereWithAggregatesInput {

    @Field(() => [SchoolLogoPictureScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SchoolLogoPictureScalarWhereWithAggregatesInput>;

    @Field(() => [SchoolLogoPictureScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SchoolLogoPictureScalarWhereWithAggregatesInput>;

    @Field(() => [SchoolLogoPictureScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SchoolLogoPictureScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    provider?: EnumMediaProviderWithAggregatesFilter;

    @HideField()
    status?: EnumMediaStatusWithAggregatesFilter;

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
    schoolID?: StringWithAggregatesFilter;
}
