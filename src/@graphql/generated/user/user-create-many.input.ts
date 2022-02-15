import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { UserCreateManyrolesInput } from './user-create-manyroles.input';

@InputType()
export class UserCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserGender, {nullable:false})
    gender!: keyof typeof UserGender;

    @Field(() => UserLocale, {nullable:false})
    locale!: keyof typeof UserLocale;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsOptional()
    email!: string;

    @HideField()
    isEmailVerified?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    phoneIndex?: string;

    @HideField()
    isPhoneVerified?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    @Validator.IsOptional()
    urlLinkedin?: string;

    @HideField()
    isTermsAccepted?: boolean;

    @HideField()
    termsAcceptedAt?: Date | string;

    @HideField()
    isBanned?: boolean;

    @HideField()
    bannedAt?: Date | string;

    @HideField()
    lastLoginAt?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    roles?: UserCreateManyrolesInput;
}
