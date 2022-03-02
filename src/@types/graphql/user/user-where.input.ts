import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumUserGenderFilter } from '../prisma/enum-user-gender-filter.input';
import { EnumUserLocaleFilter } from '../prisma/enum-user-locale-filter.input';
import { EnumUserRoleNullableListFilter } from '../prisma/enum-user-role-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserAvatarPictureListRelationFilter } from '../user-avatar-picture/user-avatar-picture-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => EnumUserGenderFilter, {nullable:true})
    gender?: EnumUserGenderFilter;

    @Field(() => EnumUserLocaleFilter, {nullable:true})
    locale?: EnumUserLocaleFilter;

    @HideField()
    roles?: EnumUserRoleNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @HideField()
    isEmailVerified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneIndex?: StringNullableFilter;

    @HideField()
    isPhoneVerified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    linkedinUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @HideField()
    termsAcceptedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    bornAt?: DateTimeNullableFilter;

    @HideField()
    bannedAt?: DateTimeNullableFilter;

    @HideField()
    lastLoginAt?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    avatarPictures?: UserAvatarPictureListRelationFilter;
}
