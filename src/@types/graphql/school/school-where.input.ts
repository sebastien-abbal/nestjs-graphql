import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SchoolLogoPictureListRelationFilter } from '../school-logo-picture/school-logo-picture-list-relation-filter.input';
import { TrackListRelationFilter } from '../track/track-list-relation-filter.input';
import { FormationListRelationFilter } from '../formation/formation-list-relation-filter.input';

@InputType()
export class SchoolWhereInput {

    @Field(() => [SchoolWhereInput], {nullable:true})
    AND?: Array<SchoolWhereInput>;

    @Field(() => [SchoolWhereInput], {nullable:true})
    OR?: Array<SchoolWhereInput>;

    @Field(() => [SchoolWhereInput], {nullable:true})
    NOT?: Array<SchoolWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isEnabled?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    websiteUrl?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    logoPictures?: SchoolLogoPictureListRelationFilter;

    @HideField()
    tracks?: TrackListRelationFilter;

    @HideField()
    formations?: FormationListRelationFilter;
}
