import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserRole } from '../prisma/user-role.enum';
import { UserAvatarPicture } from '../user-avatar-picture/user-avatar-picture.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @HideField()
    password!: string;

    @Field(() => UserGender, {nullable:false})
    gender!: keyof typeof UserGender;

    @Field(() => UserLocale, {nullable:false})
    locale!: keyof typeof UserLocale;

    @Field(() => [UserRole], {nullable:true})
    roles!: Array<keyof typeof UserRole>;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isEmailVerified!: boolean;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    phoneIndex!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPhoneVerified!: boolean;

    @Field(() => String, {nullable:true})
    urlLinkedin!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isTermsAccepted!: boolean;

    @HideField()
    termsAcceptedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isBanned!: boolean;

    @HideField()
    bannedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    lastLoginAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @HideField()
    avatarPictures?: Array<UserAvatarPicture>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
