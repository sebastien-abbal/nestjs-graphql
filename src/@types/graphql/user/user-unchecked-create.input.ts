import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserCreaterolesInput } from '../prisma/user-createroles.input';
import { HideField } from '@nestjs/graphql';
import { UserAvatarPictureUncheckedCreateNestedManyWithoutUserInput } from '../user-avatar-picture/user-avatar-picture-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    lastName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserGender, {nullable:false})
    gender!: keyof typeof UserGender;

    @Field(() => UserLocale, {nullable:false})
    locale!: keyof typeof UserLocale;

    @HideField()
    roles?: UserCreaterolesInput;

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

    @HideField()
    avatarPictures?: UserAvatarPictureUncheckedCreateNestedManyWithoutUserInput;
}
