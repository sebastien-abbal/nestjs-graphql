import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @HideField()
    password?: string;

    @Field(() => UserGender, {nullable:true})
    gender?: keyof typeof UserGender;

    @Field(() => UserLocale, {nullable:true})
    locale?: keyof typeof UserLocale;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isEmailVerified?: boolean;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    phoneIndex?: string;

    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: boolean;

    @Field(() => String, {nullable:true})
    urlLinkedin?: string;

    @Field(() => Boolean, {nullable:true})
    isTermsAccepted?: boolean;

    @HideField()
    termsAcceptedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isBanned?: boolean;

    @HideField()
    bannedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
