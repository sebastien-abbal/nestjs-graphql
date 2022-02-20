import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumUserGenderWithAggregatesFilter } from '../prisma/enum-user-gender-with-aggregates-filter.input';
import { EnumUserLocaleWithAggregatesFilter } from '../prisma/enum-user-locale-with-aggregates-filter.input';
import { EnumUserRoleNullableListFilter } from '../prisma/enum-user-role-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;

    @Field(() => EnumUserGenderWithAggregatesFilter, {nullable:true})
    gender?: EnumUserGenderWithAggregatesFilter;

    @Field(() => EnumUserLocaleWithAggregatesFilter, {nullable:true})
    locale?: EnumUserLocaleWithAggregatesFilter;

    @HideField()
    roles?: EnumUserRoleNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @HideField()
    isEmailVerified?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phoneIndex?: StringNullableWithAggregatesFilter;

    @HideField()
    isPhoneVerified?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    urlLinkedin?: StringNullableWithAggregatesFilter;

    @HideField()
    termsAcceptedAt?: DateTimeWithAggregatesFilter;

    @HideField()
    bannedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    lastLoginAt?: DateTimeWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
