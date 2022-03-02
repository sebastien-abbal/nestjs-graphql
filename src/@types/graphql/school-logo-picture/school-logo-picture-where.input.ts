import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMediaProviderFilter } from '../prisma/enum-media-provider-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumMediaStatusFilter } from '../prisma/enum-media-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SchoolRelationFilter } from '../school/school-relation-filter.input';

@InputType()
export class SchoolLogoPictureWhereInput {

    @Field(() => [SchoolLogoPictureWhereInput], {nullable:true})
    AND?: Array<SchoolLogoPictureWhereInput>;

    @Field(() => [SchoolLogoPictureWhereInput], {nullable:true})
    OR?: Array<SchoolLogoPictureWhereInput>;

    @Field(() => [SchoolLogoPictureWhereInput], {nullable:true})
    NOT?: Array<SchoolLogoPictureWhereInput>;

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
    school?: SchoolRelationFilter;

    @HideField()
    schoolID?: StringFilter;
}
