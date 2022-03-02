import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMediaProviderFilter } from '../prisma/enum-media-provider-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumMediaStatusFilter } from '../prisma/enum-media-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SchoolLogoPictureScalarWhereInput {

    @Field(() => [SchoolLogoPictureScalarWhereInput], {nullable:true})
    AND?: Array<SchoolLogoPictureScalarWhereInput>;

    @Field(() => [SchoolLogoPictureScalarWhereInput], {nullable:true})
    OR?: Array<SchoolLogoPictureScalarWhereInput>;

    @Field(() => [SchoolLogoPictureScalarWhereInput], {nullable:true})
    NOT?: Array<SchoolLogoPictureScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    provider?: EnumMediaProviderFilter;

    @HideField()
    status?: EnumMediaStatusFilter;

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
    schoolID?: StringFilter;
}
