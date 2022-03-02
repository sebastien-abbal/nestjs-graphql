import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserUpdaterolesInput } from '../prisma/user-updateroles.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    lastName?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => UserGender, {nullable:true})
    gender?: keyof typeof UserGender;

    @Field(() => UserLocale, {nullable:true})
    locale?: keyof typeof UserLocale;

    @HideField()
    roles?: UserUpdaterolesInput;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    @Validator.IsOptional()
    email?: string;

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
    linkedinUrl?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(2500)
    description?: string;

    @HideField()
    termsAcceptedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsDate()
    bornAt?: Date | string;

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
}
