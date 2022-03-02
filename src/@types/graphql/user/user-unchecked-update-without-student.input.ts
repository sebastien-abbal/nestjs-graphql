import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserUpdaterolesInput } from '../prisma/user-updateroles.input';
import { HideField } from '@nestjs/graphql';
import { UserAvatarPictureUncheckedUpdateManyWithoutUserInput } from '../user-avatar-picture/user-avatar-picture-unchecked-update-many-without-user.input';
import { GoogleCalendarItemUncheckedUpdateManyWithoutCreatedByInput } from '../google-calendar-item/google-calendar-item-unchecked-update-many-without-created-by.input';
import { ThinkificItemUncheckedUpdateManyWithoutCreatedByInput } from '../thinkific-item/thinkific-item-unchecked-update-many-without-created-by.input';
import { CourseVersionUncheckedUpdateManyWithoutValidatedByInput } from '../course-version/course-version-unchecked-update-many-without-validated-by.input';
import { TeacherUncheckedUpdateOneWithoutUserInput } from '../teacher/teacher-unchecked-update-one-without-user.input';
import { CourseVersionSupportSourceUncheckedUpdateManyWithoutUserInput } from '../course-version-support-source/course-version-support-source-unchecked-update-many-without-user.input';
import { FormationUncheckedUpdateManyWithoutHeadMasterInput } from '../formation/formation-unchecked-update-many-without-head-master.input';
import { FormationUncheckedUpdateManyWithoutOwnersInput } from '../formation/formation-unchecked-update-many-without-owners.input';

@InputType()
export class UserUncheckedUpdateWithoutStudentInput {

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

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    company?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    job?: string;

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
    avatarPictures?: UserAvatarPictureUncheckedUpdateManyWithoutUserInput;

    @HideField()
    googleCalendarItems?: GoogleCalendarItemUncheckedUpdateManyWithoutCreatedByInput;

    @HideField()
    thinkificItems?: ThinkificItemUncheckedUpdateManyWithoutCreatedByInput;

    @HideField()
    courses?: CourseVersionUncheckedUpdateManyWithoutValidatedByInput;

    @HideField()
    teacher?: TeacherUncheckedUpdateOneWithoutUserInput;

    @HideField()
    courseSupports?: CourseVersionSupportSourceUncheckedUpdateManyWithoutUserInput;

    @HideField()
    formationHeadMasters?: FormationUncheckedUpdateManyWithoutHeadMasterInput;

    @HideField()
    formationOwners?: FormationUncheckedUpdateManyWithoutOwnersInput;
}
